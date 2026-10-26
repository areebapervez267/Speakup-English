-- Phase 5, migration 1: minimal student profiles.
-- Apply this file once, before the other progress migrations.
--
-- Profiles store only a display name and timestamps. Email addresses, passwords,
-- tokens and roles remain in Supabase Auth and are never duplicated here.

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_display_name_check check (
    display_name = btrim(display_name)
    and char_length(display_name) between 1 and 80
  )
);

comment on table public.profiles is
  'Minimal student profile, one row per Supabase auth user.';
comment on column public.profiles.display_name is
  'Display name only. Do not store email addresses, tokens or role data here.';

-- Derives a safe display name from auth metadata without storing anything else.
create function public.display_name_from_metadata(metadata jsonb, email text)
returns text
language sql
immutable
set search_path = ''
as $$
  select coalesce(
    nullif(btrim(left(btrim(coalesce(metadata ->> 'full_name', '')), 80)), ''),
    nullif(btrim(left(btrim(coalesce(metadata ->> 'name', '')), 80)), ''),
    nullif(
      btrim(left(btrim(split_part(coalesce(email, ''), '@', 1)), 80)),
      ''
    ),
    'Student'
  );
$$;

revoke all on function public.display_name_from_metadata(jsonb, text)
  from public, anon, authenticated;

create function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

revoke all on function public.set_updated_at()
  from public, anon, authenticated;

create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

-- New auth users receive a profile automatically. This runs as the function
-- owner because auth.users is not writable by student sessions.
create function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    public.display_name_from_metadata(new.raw_user_meta_data, new.email)
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

revoke all on function public.handle_new_user()
  from public, anon, authenticated;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

-- Backfill profiles for accounts that already exist when this migration runs.
insert into public.profiles (id, display_name)
select
  users.id,
  public.display_name_from_metadata(users.raw_user_meta_data, users.email)
from auth.users as users
on conflict (id) do nothing;
