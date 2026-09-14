create table public.messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now()
);

grant select, insert, update, delete on public.messages to authenticated;
grant insert on public.messages to anon;
grant all on public.messages to service_role;

alter table public.messages enable row level security;

create policy "Anyone can submit a message"
  on public.messages
  for insert
  to anon, authenticated
  with check (true);

create policy "Owners can read their own messages"
  on public.messages
  for select
  to authenticated
  using (email = auth.jwt() ->> 'email');
