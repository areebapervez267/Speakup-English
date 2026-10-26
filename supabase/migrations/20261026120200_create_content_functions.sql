-- Phase 7, migration 3: validation, audit triggers and privileged content RPCs.
-- Apply this file once, after the content tables migration.
--
-- Every privileged function checks public.is_admin() itself. The API layer also
-- verifies the administrator on the server; row level security is the final
-- backstop for direct PostgREST requests.

-- Validation helpers ----------------------------------------------------------

create function public.content_quiz_is_valid(p_quiz jsonb)
returns boolean
language plpgsql
immutable
set search_path = ''
as $$
declare
  v_question jsonb;
  v_option jsonb;
  v_ids text[] := array[]::text[];
  v_id text;
  v_question_text text;
  v_explanation text;
  v_correct integer;
begin
  if p_quiz is null
     or jsonb_typeof(p_quiz) is distinct from 'array'
     or jsonb_array_length(p_quiz) = 0
  then
    return false;
  end if;

  for v_question in select value from jsonb_array_elements(p_quiz)
  loop
    if jsonb_typeof(v_question) is distinct from 'object' then
      return false;
    end if;

    if jsonb_typeof(v_question -> 'id') is distinct from 'string' then
      return false;
    end if;
    v_id := v_question ->> 'id';
    if v_id is null or char_length(v_id) not between 1 and 80 then
      return false;
    end if;
    if v_id = any(v_ids) then
      return false;
    end if;
    v_ids := array_append(v_ids, v_id);

    if jsonb_typeof(v_question -> 'question') is distinct from 'string' then
      return false;
    end if;
    v_question_text := v_question ->> 'question';
    if v_question_text is null
       or char_length(v_question_text) not between 1 and 1000
    then
      return false;
    end if;

    if jsonb_typeof(v_question -> 'options') is distinct from 'array' then
      return false;
    end if;
    if jsonb_array_length(v_question -> 'options') not between 2 and 8 then
      return false;
    end if;

    for v_option in select value from jsonb_array_elements(v_question -> 'options')
    loop
      if jsonb_typeof(v_option) is distinct from 'string' then
        return false;
      end if;
      if char_length(v_option #>> '{}') not between 1 and 500 then
        return false;
      end if;
    end loop;

    if jsonb_typeof(v_question -> 'correctIndex') is distinct from 'number' then
      return false;
    end if;
    if (v_question ->> 'correctIndex') !~ '^(0|[1-9][0-9]{0,2})$' then
      return false;
    end if;
    v_correct := (v_question ->> 'correctIndex')::integer;
    if v_correct < 0
       or v_correct >= jsonb_array_length(v_question -> 'options')
    then
      return false;
    end if;

    if jsonb_typeof(v_question -> 'explanation') is distinct from 'string' then
      return false;
    end if;
    v_explanation := v_question ->> 'explanation';
    if v_explanation is null
       or char_length(v_explanation) not between 1 and 2000
    then
      return false;
    end if;
  end loop;

  return true;
end;
$$;

comment on function public.content_quiz_is_valid(jsonb) is
  'Validates every published quiz question: unique id, 2-8 non-empty options, exactly one valid correctIndex and an explanation.';

create function public.content_blocks_are_valid(p_blocks jsonb)
returns boolean
language plpgsql
immutable
set search_path = ''
as $$
declare
  v_block jsonb;
  v_type text;
  v_title text;
  v_text text;
begin
  if p_blocks is null
     or jsonb_typeof(p_blocks) is distinct from 'array'
     or jsonb_array_length(p_blocks) = 0
  then
    return false;
  end if;

  for v_block in select value from jsonb_array_elements(p_blocks)
  loop
    if jsonb_typeof(v_block) is distinct from 'object' then
      return false;
    end if;
    if jsonb_typeof(v_block -> 'type') is distinct from 'string' then
      return false;
    end if;
    v_type := v_block ->> 'type';

    if v_type not in (
      'text', 'rules', 'examples', 'table', 'tip', 'practice',
      'passage', 'wordbank', 'dialogue', 'transcript', 'sound', 'exercise'
    ) then
      return false;
    end if;

    if v_block ? 'title' then
      if jsonb_typeof(v_block -> 'title') is distinct from 'string' then
        return false;
      end if;
      v_title := v_block ->> 'title';
      if v_title is null or char_length(v_title) > 200 then
        return false;
      end if;
    end if;

    if v_type in ('rules', 'practice', 'passage', 'wordbank', 'dialogue', 'transcript', 'sound', 'exercise')
       and coalesce(char_length(v_block ->> 'title'), 0) not between 1 and 200
    then
      return false;
    end if;

    if v_type = 'text' then
      if jsonb_typeof(v_block -> 'paragraphs') is distinct from 'array'
         or jsonb_array_length(v_block -> 'paragraphs') = 0
      then
        return false;
      end if;
    elsif v_type = 'rules' then
      if jsonb_typeof(v_block -> 'items') is distinct from 'array'
         or jsonb_array_length(v_block -> 'items') = 0
      then
        return false;
      end if;
    elsif v_type = 'examples' then
      if jsonb_typeof(v_block -> 'items') is distinct from 'array'
         or jsonb_array_length(v_block -> 'items') = 0
      then
        return false;
      end if;
    elsif v_type = 'table' then
      if jsonb_typeof(v_block -> 'columns') is distinct from 'array'
         or jsonb_typeof(v_block -> 'rows') is distinct from 'array'
      then
        return false;
      end if;
    elsif v_type = 'tip' then
      if jsonb_typeof(v_block -> 'text') is distinct from 'string' then
        return false;
      end if;
      v_text := v_block ->> 'text';
      if v_text is null or char_length(v_text) not between 1 and 2000 then
        return false;
      end if;
    elsif v_type = 'practice' then
      if jsonb_typeof(v_block -> 'instructions') is distinct from 'string'
         or jsonb_typeof(v_block -> 'items') is distinct from 'array'
      then
        return false;
      end if;
    elsif v_type = 'passage' then
      if jsonb_typeof(v_block -> 'paragraphs') is distinct from 'array'
         or jsonb_array_length(v_block -> 'paragraphs') = 0
      then
        return false;
      end if;
    elsif v_type = 'wordbank' then
      if jsonb_typeof(v_block -> 'words') is distinct from 'array'
         or jsonb_array_length(v_block -> 'words') = 0
      then
        return false;
      end if;
    elsif v_type in ('dialogue', 'transcript') then
      if jsonb_typeof(v_block -> 'lines') is distinct from 'array'
         or jsonb_array_length(v_block -> 'lines') = 0
      then
        return false;
      end if;
    elsif v_type = 'sound' then
      if jsonb_typeof(v_block -> 'sound') is distinct from 'string'
         or jsonb_typeof(v_block -> 'guidance') is distinct from 'string'
         or jsonb_typeof(v_block -> 'words') is distinct from 'array'
      then
        return false;
      end if;
    elsif v_type = 'exercise' then
      if jsonb_typeof(v_block -> 'instructions') is distinct from 'string'
         or jsonb_typeof(v_block -> 'items') is distinct from 'array'
      then
        return false;
      end if;
    end if;
  end loop;

  return true;
end;
$$;

-- Builds the public question payload. Correct answers and explanations are
-- deliberately excluded.
create function public.content_quiz_questions(p_quiz jsonb)
returns jsonb
language sql
immutable
set search_path = ''
as $$
  select coalesce(
    jsonb_agg(
      jsonb_build_object(
        'id', question ->> 'id',
        'question', question ->> 'question',
        'options', question -> 'options'
      )
      order by position
    ),
    '[]'::jsonb
  )
  from jsonb_array_elements(p_quiz) with ordinality
    as entries(question, position);
$$;

create function public.content_quiz_answers(p_quiz jsonb)
returns jsonb
language sql
immutable
set search_path = ''
as $$
  select coalesce(
    jsonb_agg(
      jsonb_build_object(
        'id', question ->> 'id',
        'correctIndex', (question ->> 'correctIndex')::integer,
        'explanation', question ->> 'explanation'
      )
      order by position
    ),
    '[]'::jsonb
  )
  from jsonb_array_elements(p_quiz) with ordinality
    as entries(question, position);
$$;

revoke all on function public.content_quiz_is_valid(jsonb)
  from public, anon, authenticated;
revoke all on function public.content_blocks_are_valid(jsonb)
  from public, anon, authenticated;
revoke all on function public.content_quiz_questions(jsonb)
  from public, anon, authenticated;
revoke all on function public.content_quiz_answers(jsonb)
  from public, anon, authenticated;

-- Public content state --------------------------------------------------------

-- Returns only slugs, publication states and the first/last publish marker so
-- student pages can tell whether a built-in static course has been replaced or
-- suppressed by the admin workspace. Draft titles, bodies, quizzes and answer
-- keys are never returned.
create function public.get_content_slug_states()
returns table (slug text, status text, last_published_at timestamptz)
language sql
stable
security definer
set search_path = ''
as $$
  select courses.slug, courses.status, courses.last_published_at
  from public.content_courses as courses;
$$;

revoke all on function public.get_content_slug_states()
  from public, anon, authenticated;
grant execute on function public.get_content_slug_states() to anon, authenticated;

-- Audit triggers --------------------------------------------------------------

create function public.record_content_change_audit()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_actor uuid := auth.uid();
  v_email text;
  v_entity_type text;
  v_entity_id uuid;
  v_title text;
  v_status text;
  v_summary text;
begin
  if v_actor is null
     or coalesce(current_setting('speakup.suppress_content_audit', true), '') = 'on'
  then
    if TG_OP = 'DELETE' then
      return old;
    end if;
    return new;
  end if;

  select admins.email into v_email
  from public.admin_users as admins
  where admins.user_id = v_actor;

  if v_email is null then
    if TG_OP = 'DELETE' then
      return old;
    end if;
    return new;
  end if;

  v_entity_type := case TG_TABLE_NAME
    when 'content_courses' then 'course'
    when 'content_units' then 'unit'
    else 'lesson'
  end;

  if TG_OP = 'DELETE' then
    v_entity_id := old.id;
    v_title := old.title;
    v_status := old.status;
  else
    v_entity_id := new.id;
    v_title := new.title;
    v_status := new.status;
  end if;

  v_summary := case TG_OP
    when 'INSERT' then 'Created '
    when 'UPDATE' then 'Updated '
    else 'Deleted '
  end || v_entity_type || ' "' || coalesce(v_title, 'Untitled') || '"';

  insert into public.admin_audit_log (
    actor_id,
    actor_email,
    action,
    entity_type,
    entity_id,
    summary,
    detail
  )
  values (
    v_actor,
    v_email,
    v_entity_type || '_' || lower(TG_OP),
    v_entity_type,
    v_entity_id,
    left(v_summary, 300),
    jsonb_build_object('status', v_status)
  );

  if TG_OP = 'DELETE' then
    return old;
  end if;
  return new;
end;
$$;

revoke all on function public.record_content_change_audit()
  from public, anon, authenticated;

create trigger content_courses_audit
after insert or update or delete on public.content_courses
for each row execute function public.record_content_change_audit();

create trigger content_units_audit
after insert or update or delete on public.content_units
for each row execute function public.record_content_change_audit();

create trigger content_lessons_audit
after insert or update or delete on public.content_lessons
for each row execute function public.record_content_change_audit();

create trigger content_courses_set_updated_at
before update on public.content_courses
for each row execute function public.set_updated_at();

create trigger content_units_set_updated_at
before update on public.content_units
for each row execute function public.set_updated_at();

create trigger content_lessons_set_updated_at
before update on public.content_lessons
for each row execute function public.set_updated_at();

-- Published URLs stay stable: a course slug cannot change after its first
-- publish, and lesson slugs never change so saved progress and links survive.
create function public.protect_content_slugs()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  if TG_TABLE_NAME = 'content_courses' then
    if old.last_published_at is not null and new.slug is distinct from old.slug then
      raise exception 'The course URL cannot change after the first publish. Create a new course instead.'
        using errcode = '22023';
    end if;
  elsif TG_TABLE_NAME = 'content_lessons' then
    if new.slug is distinct from old.slug then
      raise exception 'Lesson URLs are permanent so saved progress and links keep working.'
        using errcode = '22023';
    end if;
  end if;

  return new;
end;
$$;

revoke all on function public.protect_content_slugs()
  from public, anon, authenticated;

create trigger content_courses_protect_slug
before update on public.content_courses
for each row execute function public.protect_content_slugs();

create trigger content_lessons_protect_slug
before update on public.content_lessons
for each row execute function public.protect_content_slugs();

-- Publishing ------------------------------------------------------------------

create function public.publish_content_course(p_course_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_course public.content_courses%rowtype;
  v_unit record;
  v_lesson record;
  v_lesson_count integer := 0;
begin
  if not public.is_admin() then
    raise exception 'Only administrators can publish courses.'
      using errcode = '42501';
  end if;

  select * into v_course
  from public.content_courses
  where id = p_course_id
  for update;

  if not found then
    raise exception 'Course not found.' using errcode = 'P0002';
  end if;

  if v_course.status = 'archived' then
    raise exception 'Restore this course from the archive before publishing.'
      using errcode = '22023';
  end if;

  if v_course.description = '' or cardinality(v_course.outcomes) = 0 then
    raise exception 'Add a description and at least one learning outcome before publishing.'
      using errcode = '22023';
  end if;

  if exists (
    select 1
    from public.content_lessons as lessons
    join public.content_units as units on units.id = lessons.unit_id
    where lessons.course_id = p_course_id
      and lessons.status = 'published'
      and units.status = 'published'
      and (
        not public.content_blocks_are_valid(lessons.blocks)
        or not public.content_quiz_is_valid(lessons.quiz)
      )
  ) then
    raise exception 'Every published lesson needs valid content blocks and a valid quiz with exactly one correct answer per question.'
      using errcode = '22023';
  end if;

  select count(*)::integer into v_lesson_count
  from public.content_lessons as lessons
  join public.content_units as units on units.id = lessons.unit_id
  where lessons.course_id = p_course_id
    and lessons.status = 'published'
    and units.status = 'published'
    and exists (
      select 1
      from public.content_lessons as unit_lessons
      where unit_lessons.unit_id = units.id
        and unit_lessons.status = 'published'
    );

  if v_lesson_count = 0 then
    raise exception 'Mark at least one unit and lesson as published before publishing the course.'
      using errcode = '22023';
  end if;

  if exists (
    select 1
    from public.published_courses as published
    where published.slug = v_course.slug
      and published.course_id <> p_course_id
  ) then
    raise exception 'Another published course already uses this slug.'
      using errcode = '23505';
  end if;

  perform set_config('speakup.suppress_content_audit', 'on', true);

  delete from public.published_courses where course_id = p_course_id;

  insert into public.published_courses (
    course_id,
    slug,
    title,
    summary,
    description,
    level,
    skill,
    outcomes,
    metadata,
    premium,
    hours,
    lesson_count,
    published_at
  )
  values (
    v_course.id,
    v_course.slug,
    v_course.title,
    v_course.summary,
    v_course.description,
    v_course.level,
    v_course.skill,
    v_course.outcomes,
    v_course.metadata,
    v_course.premium,
    v_course.hours,
    v_lesson_count,
    now()
  );

  for v_unit in
    select *
    from public.content_units
    where course_id = p_course_id
      and status = 'published'
      and exists (
        select 1
        from public.content_lessons as unit_lessons
        where unit_lessons.unit_id = content_units.id
          and unit_lessons.status = 'published'
      )
    order by sort_order, created_at
  loop
    insert into public.published_units (id, course_id, title, description, sort_order)
    values (v_unit.id, v_unit.course_id, v_unit.title, v_unit.description, v_unit.sort_order);

    for v_lesson in
      select *
      from public.content_lessons
      where unit_id = v_unit.id
        and status = 'published'
      order by sort_order, created_at
    loop
      insert into public.published_lessons (
        id,
        course_id,
        unit_id,
        slug,
        title,
        summary,
        objective,
        minutes,
        blocks,
        questions,
        sort_order
      )
      values (
        v_lesson.id,
        v_lesson.course_id,
        v_lesson.unit_id,
        v_lesson.slug,
        v_lesson.title,
        v_lesson.summary,
        v_lesson.objective,
        v_lesson.minutes,
        v_lesson.blocks,
        public.content_quiz_questions(v_lesson.quiz),
        v_lesson.sort_order
      );

      insert into public.published_quiz_answers (
        lesson_id,
        course_slug,
        lesson_slug,
        answers
      )
      values (
        v_lesson.id,
        v_course.slug,
        v_lesson.slug,
        public.content_quiz_answers(v_lesson.quiz)
      );
    end loop;
  end loop;

  update public.content_courses
  set status = 'published', last_published_at = now()
  where id = p_course_id;

  insert into public.admin_audit_log (
    actor_id,
    actor_email,
    action,
    entity_type,
    entity_id,
    summary,
    detail
  )
  values (
    auth.uid(),
    (select email from public.admin_users where user_id = auth.uid()),
    'course_published',
    'course',
    p_course_id,
    left('Published "' || v_course.title || '"', 300),
    jsonb_build_object('lesson_count', v_lesson_count)
  );
end;
$$;

create function public.unpublish_content_course(p_course_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_course public.content_courses%rowtype;
begin
  if not public.is_admin() then
    raise exception 'Only administrators can unpublish courses.'
      using errcode = '42501';
  end if;

  select * into v_course
  from public.content_courses
  where id = p_course_id
  for update;

  if not found then
    raise exception 'Course not found.' using errcode = 'P0002';
  end if;

  perform set_config('speakup.suppress_content_audit', 'on', true);

  delete from public.published_courses where course_id = p_course_id;

  if v_course.status <> 'archived' then
    update public.content_courses
    set status = 'draft'
    where id = p_course_id;
  end if;

  insert into public.admin_audit_log (
    actor_id,
    actor_email,
    action,
    entity_type,
    entity_id,
    summary,
    detail
  )
  values (
    auth.uid(),
    (select email from public.admin_users where user_id = auth.uid()),
    'course_unpublished',
    'course',
    p_course_id,
    left('Unpublished "' || v_course.title || '"', 300),
    '{}'::jsonb
  );
end;
$$;

create function public.archive_content_course(p_course_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_course public.content_courses%rowtype;
begin
  if not public.is_admin() then
    raise exception 'Only administrators can archive courses.'
      using errcode = '42501';
  end if;

  select * into v_course
  from public.content_courses
  where id = p_course_id
  for update;

  if not found then
    raise exception 'Course not found.' using errcode = 'P0002';
  end if;

  perform set_config('speakup.suppress_content_audit', 'on', true);

  delete from public.published_courses where course_id = p_course_id;

  update public.content_courses
  set status = 'archived'
  where id = p_course_id;

  insert into public.admin_audit_log (
    actor_id,
    actor_email,
    action,
    entity_type,
    entity_id,
    summary,
    detail
  )
  values (
    auth.uid(),
    (select email from public.admin_users where user_id = auth.uid()),
    'course_archived',
    'course',
    p_course_id,
    left('Archived "' || v_course.title || '"', 300),
    '{}'::jsonb
  );
end;
$$;

create function public.restore_content_course(p_course_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_course public.content_courses%rowtype;
begin
  if not public.is_admin() then
    raise exception 'Only administrators can restore courses.'
      using errcode = '42501';
  end if;

  select * into v_course
  from public.content_courses
  where id = p_course_id
  for update;

  if not found then
    raise exception 'Course not found.' using errcode = 'P0002';
  end if;

  if v_course.status <> 'archived' then
    raise exception 'Only archived courses can be restored.'
      using errcode = '22023';
  end if;

  perform set_config('speakup.suppress_content_audit', 'on', true);

  update public.content_courses
  set status = 'draft'
  where id = p_course_id;

  insert into public.admin_audit_log (
    actor_id,
    actor_email,
    action,
    entity_type,
    entity_id,
    summary,
    detail
  )
  values (
    auth.uid(),
    (select email from public.admin_users where user_id = auth.uid()),
    'course_restored',
    'course',
    p_course_id,
    left('Restored "' || v_course.title || '" to draft', 300),
    '{}'::jsonb
  );
end;
$$;

-- Ordering --------------------------------------------------------------------

create function public.reorder_content_units(
  p_course_id uuid,
  p_unit_ids uuid[]
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_course_title text;
begin
  if not public.is_admin() then
    raise exception 'Only administrators can reorder units.'
      using errcode = '42501';
  end if;

  select title into v_course_title
  from public.content_courses
  where id = p_course_id;

  if v_course_title is null then
    raise exception 'Course not found.' using errcode = 'P0002';
  end if;

  if p_unit_ids is null
     or cardinality(p_unit_ids) = 0
     or cardinality(p_unit_ids) <> (
       select count(*)::integer
       from public.content_units
       where course_id = p_course_id
     )
     or cardinality(p_unit_ids) <> (
       select count(distinct unit_id)::integer
       from unnest(p_unit_ids) as ids(unit_id)
     )
     or exists (
       select 1
       from unnest(p_unit_ids) as ids(unit_id)
       where not exists (
         select 1
         from public.content_units as units
         where units.id = ids.unit_id
           and units.course_id = p_course_id
       )
     )
  then
    raise exception 'The unit order did not match this course.'
      using errcode = '22023';
  end if;

  perform set_config('speakup.suppress_content_audit', 'on', true);

  update public.content_units as units
  set sort_order = ordered.position::integer - 1
  from unnest(p_unit_ids) with ordinality as ordered(unit_id, position)
  where units.id = ordered.unit_id
    and units.course_id = p_course_id;

  insert into public.admin_audit_log (
    actor_id,
    actor_email,
    action,
    entity_type,
    entity_id,
    summary,
    detail
  )
  values (
    auth.uid(),
    (select email from public.admin_users where user_id = auth.uid()),
    'course_units_reordered',
    'course',
    p_course_id,
    left('Reordered units in "' || v_course_title || '"', 300),
    jsonb_build_object('unit_count', cardinality(p_unit_ids))
  );
end;
$$;

create function public.reorder_content_lessons(
  p_unit_id uuid,
  p_lesson_ids uuid[]
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_unit_title text;
begin
  if not public.is_admin() then
    raise exception 'Only administrators can reorder lessons.'
      using errcode = '42501';
  end if;

  select title into v_unit_title
  from public.content_units
  where id = p_unit_id;

  if v_unit_title is null then
    raise exception 'Unit not found.' using errcode = 'P0002';
  end if;

  if p_lesson_ids is null
     or cardinality(p_lesson_ids) = 0
     or cardinality(p_lesson_ids) <> (
       select count(*)::integer
       from public.content_lessons
       where unit_id = p_unit_id
     )
     or cardinality(p_lesson_ids) <> (
       select count(distinct lesson_id)::integer
       from unnest(p_lesson_ids) as ids(lesson_id)
     )
     or exists (
       select 1
       from unnest(p_lesson_ids) as ids(lesson_id)
       where not exists (
         select 1
         from public.content_lessons as lessons
         where lessons.id = ids.lesson_id
           and lessons.unit_id = p_unit_id
       )
     )
  then
    raise exception 'The lesson order did not match this unit.'
      using errcode = '22023';
  end if;

  perform set_config('speakup.suppress_content_audit', 'on', true);

  update public.content_lessons as lessons
  set sort_order = ordered.position::integer - 1
  from unnest(p_lesson_ids) with ordinality as ordered(lesson_id, position)
  where lessons.id = ordered.lesson_id
    and lessons.unit_id = p_unit_id;

  insert into public.admin_audit_log (
    actor_id,
    actor_email,
    action,
    entity_type,
    entity_id,
    summary,
    detail
  )
  values (
    auth.uid(),
    (select email from public.admin_users where user_id = auth.uid()),
    'unit_lessons_reordered',
    'unit',
    p_unit_id,
    left('Reordered lessons in "' || v_unit_title || '"', 300),
    jsonb_build_object('lesson_count', cardinality(p_lesson_ids))
  );
end;
$$;

-- Marks every unit and lesson in a course ready for publishing. The publish
-- function still validates content before anything becomes public.
create function public.mark_content_course_ready(p_course_id uuid)
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_course public.content_courses%rowtype;
  v_lesson_count integer := 0;
begin
  if not public.is_admin() then
    raise exception 'Only administrators can prepare course content.'
      using errcode = '42501';
  end if;

  select * into v_course
  from public.content_courses
  where id = p_course_id
  for update;

  if not found then
    raise exception 'Course not found.' using errcode = 'P0002';
  end if;

  if v_course.status = 'archived' then
    raise exception 'Restore this course before preparing its content.'
      using errcode = '22023';
  end if;

  perform set_config('speakup.suppress_content_audit', 'on', true);

  update public.content_units
  set status = 'published'
  where course_id = p_course_id;

  update public.content_lessons
  set status = 'published'
  where course_id = p_course_id;

  select count(*)::integer into v_lesson_count
  from public.content_lessons
  where course_id = p_course_id;

  insert into public.admin_audit_log (
    actor_id,
    actor_email,
    action,
    entity_type,
    entity_id,
    summary,
    detail
  )
  values (
    auth.uid(),
    (select email from public.admin_users where user_id = auth.uid()),
    'course_content_ready',
    'course',
    p_course_id,
    left('Marked all content ready in "' || v_course.title || '"', 300),
    jsonb_build_object('lessons', v_lesson_count)
  );

  return v_lesson_count;
end;
$$;

revoke all on function public.mark_content_course_ready(uuid)
  from public, anon, authenticated;
grant execute on function public.mark_content_course_ready(uuid)
  to authenticated;

-- Safe deletion ---------------------------------------------------------------

create function public.delete_content_lesson(p_lesson_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_lesson public.content_lessons%rowtype;
  v_course_slug text;
begin
  if not public.is_admin() then
    raise exception 'Only administrators can delete lessons.'
      using errcode = '42501';
  end if;

  select lessons.* into v_lesson
  from public.content_lessons as lessons
  where lessons.id = p_lesson_id
  for update;

  if not found then
    raise exception 'Lesson not found.' using errcode = 'P0002';
  end if;

  select slug into v_course_slug
  from public.content_courses
  where id = v_lesson.course_id;

  if exists (
    select 1
    from public.lesson_progress
    where course_slug = v_course_slug
      and lesson_slug = v_lesson.slug
  ) or exists (
    select 1
    from public.quiz_attempts
    where course_slug = v_course_slug
      and lesson_slug = v_lesson.slug
  ) then
    raise exception 'This lesson has saved student progress or quiz attempts. Set it to draft and republish, or archive the course instead.'
      using errcode = '23503';
  end if;

  perform set_config('speakup.suppress_content_audit', 'on', true);

  delete from public.content_lessons where id = p_lesson_id;

  insert into public.admin_audit_log (
    actor_id,
    actor_email,
    action,
    entity_type,
    entity_id,
    summary,
    detail
  )
  values (
    auth.uid(),
    (select email from public.admin_users where user_id = auth.uid()),
    'lesson_deleted',
    'lesson',
    p_lesson_id,
    left('Deleted lesson "' || v_lesson.title || '"', 300),
    jsonb_build_object('course_slug', v_course_slug, 'lesson_slug', v_lesson.slug)
  );
end;
$$;

create function public.delete_content_unit(p_unit_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_unit public.content_units%rowtype;
  v_course_slug text;
begin
  if not public.is_admin() then
    raise exception 'Only administrators can delete units.'
      using errcode = '42501';
  end if;

  select * into v_unit
  from public.content_units
  where id = p_unit_id
  for update;

  if not found then
    raise exception 'Unit not found.' using errcode = 'P0002';
  end if;

  select slug into v_course_slug
  from public.content_courses
  where id = v_unit.course_id;

  if exists (
    select 1
    from public.lesson_progress as progress
    join public.content_lessons as lessons
      on lessons.slug = progress.lesson_slug
     and lessons.unit_id = p_unit_id
    where progress.course_slug = v_course_slug
  ) or exists (
    select 1
    from public.quiz_attempts as attempts
    join public.content_lessons as lessons
      on lessons.slug = attempts.lesson_slug
     and lessons.unit_id = p_unit_id
    where attempts.course_slug = v_course_slug
  ) then
    raise exception 'A lesson in this unit has saved student progress or quiz attempts. Set those lessons to draft and republish, or archive the course instead.'
      using errcode = '23503';
  end if;

  perform set_config('speakup.suppress_content_audit', 'on', true);

  delete from public.content_units where id = p_unit_id;

  insert into public.admin_audit_log (
    actor_id,
    actor_email,
    action,
    entity_type,
    entity_id,
    summary,
    detail
  )
  values (
    auth.uid(),
    (select email from public.admin_users where user_id = auth.uid()),
    'unit_deleted',
    'unit',
    p_unit_id,
    left('Deleted unit "' || v_unit.title || '"', 300),
    jsonb_build_object('course_slug', v_course_slug)
  );
end;
$$;

-- Import of built-in TypeScript content ---------------------------------------

create function public.import_content_course(p_course jsonb)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_course_id uuid;
  v_slug text;
  v_unit jsonb;
  v_lesson jsonb;
  v_unit_id uuid;
  v_unit_index integer := 0;
  v_lesson_index integer;
  v_unit_count integer := 0;
  v_lesson_count integer := 0;
  v_outcomes text[];
begin
  if not public.is_admin() then
    raise exception 'Only administrators can import courses.'
      using errcode = '42501';
  end if;

  if p_course is null or jsonb_typeof(p_course) is distinct from 'object' then
    raise exception 'Invalid import payload.' using errcode = '22023';
  end if;

  v_slug := p_course ->> 'slug';
  if v_slug is null or v_slug !~ '^[a-z0-9]+(-[a-z0-9]+)*$'
     or char_length(v_slug) not between 1 and 120
  then
    raise exception 'Invalid course slug.' using errcode = '22023';
  end if;

  if jsonb_typeof(p_course -> 'units') is distinct from 'array'
     or jsonb_array_length(p_course -> 'units') = 0
  then
    raise exception 'The import payload must include at least one unit.'
      using errcode = '22023';
  end if;

  if jsonb_typeof(p_course -> 'metadata') is distinct from 'object' then
    raise exception 'Course metadata must be a JSON object.'
      using errcode = '22023';
  end if;

  if p_course ? 'outcomes' then
    if jsonb_typeof(p_course -> 'outcomes') is distinct from 'array' then
      raise exception 'Course outcomes must be an array.' using errcode = '22023';
    end if;
    v_outcomes := array(
      select jsonb_array_elements_text(p_course -> 'outcomes')
    );
  else
    v_outcomes := array[]::text[];
  end if;

  perform set_config('speakup.suppress_content_audit', 'on', true);

  select id into v_course_id
  from public.content_courses
  where slug = v_slug
  for update;

  if v_course_id is not null then
    if exists (
      select 1 from public.content_units where course_id = v_course_id
    ) then
      raise exception 'This course already has units. Import is only available before the first unit is created.'
        using errcode = '23505';
    end if;

    update public.content_courses
    set
      title = p_course ->> 'title',
      summary = p_course ->> 'summary',
      description = coalesce(p_course ->> 'description', ''),
      level = p_course ->> 'level',
      skill = p_course ->> 'skill',
      outcomes = v_outcomes,
      metadata = p_course -> 'metadata',
      premium = coalesce((p_course ->> 'premium')::boolean, false),
      hours = coalesce((p_course ->> 'hours')::integer, 1)
    where id = v_course_id;
  else
    insert into public.content_courses (
      slug,
      title,
      summary,
      description,
      level,
      skill,
      outcomes,
      metadata,
      premium,
      hours,
      status,
      created_by
    )
    values (
      v_slug,
      p_course ->> 'title',
      p_course ->> 'summary',
      coalesce(p_course ->> 'description', ''),
      p_course ->> 'level',
      p_course ->> 'skill',
      v_outcomes,
      p_course -> 'metadata',
      coalesce((p_course ->> 'premium')::boolean, false),
      coalesce((p_course ->> 'hours')::integer, 1),
      'draft',
      auth.uid()
    )
    returning id into v_course_id;
  end if;

  for v_unit in select value from jsonb_array_elements(p_course -> 'units')
  loop
    if jsonb_typeof(v_unit) is distinct from 'object' then
      raise exception 'Invalid unit in import payload.' using errcode = '22023';
    end if;
    if jsonb_typeof(v_unit -> 'lessons') is distinct from 'array'
       or jsonb_array_length(v_unit -> 'lessons') = 0
    then
      raise exception 'Every imported unit needs at least one lesson.'
        using errcode = '22023';
    end if;

    insert into public.content_units (
      course_id,
      title,
      description,
      status,
      sort_order
    )
    values (
      v_course_id,
      v_unit ->> 'title',
      coalesce(v_unit ->> 'description', ''),
      'draft',
      v_unit_index
    )
    returning id into v_unit_id;

    v_unit_count := v_unit_count + 1;
    v_lesson_index := 0;

    for v_lesson in select value from jsonb_array_elements(v_unit -> 'lessons')
    loop
      if jsonb_typeof(v_lesson) is distinct from 'object' then
        raise exception 'Invalid lesson in import payload.' using errcode = '22023';
      end if;
      if jsonb_typeof(v_lesson -> 'blocks') is distinct from 'array'
         or jsonb_typeof(v_lesson -> 'quiz') is distinct from 'array'
      then
        raise exception 'Imported lesson blocks and quiz must be arrays.'
          using errcode = '22023';
      end if;

      insert into public.content_lessons (
        course_id,
        unit_id,
        slug,
        title,
        summary,
        objective,
        minutes,
        blocks,
        quiz,
        status,
        sort_order
      )
      values (
        v_course_id,
        v_unit_id,
        v_lesson ->> 'slug',
        v_lesson ->> 'title',
        v_lesson ->> 'summary',
        v_lesson ->> 'objective',
        coalesce((v_lesson ->> 'minutes')::integer, 10),
        v_lesson -> 'blocks',
        v_lesson -> 'quiz',
        'draft',
        v_lesson_index
      );

      v_lesson_index := v_lesson_index + 1;
      v_lesson_count := v_lesson_count + 1;
    end loop;

    v_unit_index := v_unit_index + 1;
  end loop;

  insert into public.admin_audit_log (
    actor_id,
    actor_email,
    action,
    entity_type,
    entity_id,
    summary,
    detail
  )
  values (
    auth.uid(),
    (select email from public.admin_users where user_id = auth.uid()),
    'course_imported',
    'course',
    v_course_id,
    left('Imported built-in content for "' || (p_course ->> 'title') || '"', 300),
    jsonb_build_object('units', v_unit_count, 'lessons', v_lesson_count)
  );

  return v_course_id;
end;
$$;

revoke all on function public.publish_content_course(uuid)
  from public, anon, authenticated;
revoke all on function public.unpublish_content_course(uuid)
  from public, anon, authenticated;
revoke all on function public.archive_content_course(uuid)
  from public, anon, authenticated;
revoke all on function public.restore_content_course(uuid)
  from public, anon, authenticated;
revoke all on function public.reorder_content_units(uuid, uuid[])
  from public, anon, authenticated;
revoke all on function public.reorder_content_lessons(uuid, uuid[])
  from public, anon, authenticated;
revoke all on function public.delete_content_lesson(uuid)
  from public, anon, authenticated;
revoke all on function public.delete_content_unit(uuid)
  from public, anon, authenticated;
revoke all on function public.import_content_course(jsonb)
  from public, anon, authenticated;

grant execute on function public.publish_content_course(uuid) to authenticated;
grant execute on function public.unpublish_content_course(uuid) to authenticated;
grant execute on function public.archive_content_course(uuid) to authenticated;
grant execute on function public.restore_content_course(uuid) to authenticated;
grant execute on function public.reorder_content_units(uuid, uuid[]) to authenticated;
grant execute on function public.reorder_content_lessons(uuid, uuid[]) to authenticated;
grant execute on function public.delete_content_lesson(uuid) to authenticated;
grant execute on function public.delete_content_unit(uuid) to authenticated;
grant execute on function public.import_content_course(jsonb) to authenticated;

-- Quiz grading ----------------------------------------------------------------

-- Returns a score and the answer review only in response to a complete answer
-- submission. Published lesson rows contain no answer key; this function reads
-- the private key table as the database owner. It is callable by guests so the
-- practice quiz keeps working without an account, but it never returns answers
-- as part of lesson content.
create function public.grade_published_lesson_quiz(
  p_course_slug text,
  p_lesson_slug text,
  p_answers jsonb
)
returns jsonb
language plpgsql
stable
security definer
set search_path = ''
as $$
declare
  v_lesson_id uuid;
  v_questions jsonb;
  v_answer_key jsonb;
  v_question jsonb;
  v_answer jsonb;
  v_question_id text;
  v_selected integer;
  v_correct integer;
  v_total integer;
  v_score integer := 0;
  v_review jsonb := '[]'::jsonb;
begin
  if p_course_slug is null or p_lesson_slug is null
     or char_length(p_course_slug) not between 1 and 120
     or char_length(p_lesson_slug) not between 1 and 120
  then
    raise exception 'Invalid lesson identifier.' using errcode = '22023';
  end if;

  if p_answers is null or jsonb_typeof(p_answers) is distinct from 'object' then
    raise exception 'Invalid quiz answers.' using errcode = '22023';
  end if;

  select lessons.id, lessons.questions
  into v_lesson_id, v_questions
  from public.published_lessons as lessons
  join public.published_courses as courses
    on courses.course_id = lessons.course_id
  where courses.slug = p_course_slug
    and lessons.slug = p_lesson_slug;

  if v_lesson_id is null then
    raise exception 'This lesson is not published.' using errcode = 'P0002';
  end if;

  select answers into v_answer_key
  from public.published_quiz_answers
  where lesson_id = v_lesson_id;

  if v_answer_key is null then
    raise exception 'This quiz does not have an answer key.' using errcode = 'P0002';
  end if;

  v_total := jsonb_array_length(v_questions);

  if v_total = 0 then
    raise exception 'This lesson does not have a quiz.' using errcode = '22023';
  end if;

  if (
    select count(*)::integer
    from jsonb_object_keys(p_answers) as keys(key)
  ) <> v_total then
    raise exception 'Submit an answer for every question.' using errcode = '22023';
  end if;

  for v_question in select value from jsonb_array_elements(v_questions)
  loop
    v_question_id := v_question ->> 'id';
    v_answer := null;

    if not (p_answers ? v_question_id) then
      raise exception 'Submit an answer for every question.' using errcode = '22023';
    end if;

    if jsonb_typeof(p_answers -> v_question_id) is distinct from 'number'
       or (p_answers ->> v_question_id) !~ '^(0|[1-9][0-9]{0,2})$'
    then
      raise exception 'Invalid quiz answers.' using errcode = '22023';
    end if;

    v_selected := (p_answers ->> v_question_id)::integer;
    if v_selected < 0
       or v_selected >= jsonb_array_length(v_question -> 'options')
    then
      raise exception 'Invalid quiz answers.' using errcode = '22023';
    end if;

    select value into v_answer
    from jsonb_array_elements(v_answer_key)
    where value ->> 'id' = v_question_id;

    if v_answer is null then
      raise exception 'This quiz does not have an answer key.' using errcode = 'P0002';
    end if;

    v_correct := (v_answer ->> 'correctIndex')::integer;

    if v_selected = v_correct then
      v_score := v_score + 1;
    end if;

    v_review := v_review || jsonb_build_array(
      jsonb_build_object(
        'id', v_question_id,
        'correctIndex', v_correct,
        'explanation', v_answer ->> 'explanation'
      )
    );
  end loop;

  return jsonb_build_object(
    'score', v_score,
    'total', v_total,
    'review', v_review
  );
end;
$$;

revoke all on function public.grade_published_lesson_quiz(text, text, jsonb)
  from public, anon, authenticated;
grant execute on function public.grade_published_lesson_quiz(text, text, jsonb)
  to anon, authenticated;
