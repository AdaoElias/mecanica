create table if not exists public.mecanica_progress (
  user_id uuid primary key references auth.users (id) on delete cascade,
  checks jsonb not null default '{}'::jsonb,
  quiz jsonb not null default '{}'::jsonb,
  notes jsonb not null default '{}'::jsonb,
  tab text not null default 'aula-1',
  updated_at timestamptz not null default now()
);

alter table public.mecanica_progress enable row level security;

grant usage on schema public to authenticated;
grant select, insert, update, delete on public.mecanica_progress to authenticated;
revoke all on public.mecanica_progress from anon;

drop policy if exists "mecanica_select_own_progress" on public.mecanica_progress;
create policy "mecanica_select_own_progress"
on public.mecanica_progress for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "mecanica_insert_own_progress" on public.mecanica_progress;
create policy "mecanica_insert_own_progress"
on public.mecanica_progress for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "mecanica_update_own_progress" on public.mecanica_progress;
create policy "mecanica_update_own_progress"
on public.mecanica_progress for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "mecanica_delete_own_progress" on public.mecanica_progress;
create policy "mecanica_delete_own_progress"
on public.mecanica_progress for delete
to authenticated
using (auth.uid() = user_id);

create or replace function public.mecanica_touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists mecanica_progress_touch on public.mecanica_progress;
create trigger mecanica_progress_touch
before update on public.mecanica_progress
for each row execute function public.mecanica_touch_updated_at();
