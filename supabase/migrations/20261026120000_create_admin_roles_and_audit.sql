-- Phase 7, migration 1: administrator allow-list and audit trail.
-- Apply this file once, after all Phase 5 migrations.
--
-- Administrator status is stored only in public.admin_users, which has no
-- grants and no RLS policies. A signed-in user cannot read it, insert into it,
-- update it or promote themselves through the API. The first administrator is
-- added deliberately with SQL in the Supabase SQL editor; see
-- docs/admin-database-setup.md. Editable auth metadata is never consulted.

create table public.admin_users (
  user_id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  note text not null default '',
  created_at timestamptz not null default now(),
  constraint admin_users_email_check check (
    char_length(email) between 3 and 320
    and email like '%@%'
  ),
  constraint admin_users_note_check check (char_length(note) <= 500)
);

comment on table public.admin_users is
  'Trusted administrator allow-list. Managed manually in the Supabase SQL editor, never through application code.';

alter table public.admin_users enable row level security;

-- No policies are created on purpose. Even an administrator cannot browse this
-- table through PostgREST; the application asks public.is_admin() instead.
revoke all on table public.admin_users from public, anon, authenticated;

create function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.admin_users
    where user_id = auth.uid()
  );
$$;

comment on function public.is_admin() is
  'Returns true only when the current auth.uid() has an explicit row in public.admin_users.';

revoke all on function public.is_admin() from public, anon, authenticated;
grant execute on function public.is_admin() to authenticated;

-- Audit trail -----------------------------------------------------------------

create table public.admin_audit_log (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references auth.users (id) on delete set null,
  actor_email text,
  action text not null,
  entity_type text not null,
  entity_id uuid,
  summary text not null,
  detail jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint admin_audit_log_action_check check (
    char_length(action) between 2 and 60
    and action ~ '^[a-z][a-z0-9_]*$'
  ),
  constraint admin_audit_log_entity_type_check check (
    entity_type in ('course', 'unit', 'lesson', 'system')
  ),
  constraint admin_audit_log_summary_check check (
    char_length(summary) between 1 and 300
  ),
  constraint admin_audit_log_detail_check check (
    jsonb_typeof(detail) = 'object'
  )
);

comment on table public.admin_audit_log is
  'Recent administrative changes. Written by security-definer triggers and publishing functions; administrators can read but not alter it.';

create index admin_audit_log_created_at_idx
  on public.admin_audit_log (created_at desc);

alter table public.admin_audit_log enable row level security;

create policy "admin_audit_log_select_admins"
on public.admin_audit_log
for select
to authenticated
using (public.is_admin());

revoke all on table public.admin_audit_log from public, anon, authenticated;
grant select on table public.admin_audit_log to authenticated;

-- No insert, update or delete grants: audit rows are append-only and can only
-- be written by security-definer functions owned by the database owner.
