-- Run this in your Supabase SQL editor

create table rsvps (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  attending text not null,       -- 'yes' or 'no'
  guests integer default 1,
  dietary text,
  hotel_requested boolean default false,
  hotel_nights integer,
  hotel_total_inr integer,
  message text
);

-- Enable Row Level Security
alter table rsvps enable row level security;

-- Allow inserts from anyone (guests submitting RSVP)
create policy "Anyone can insert rsvp"
  on rsvps for insert
  with check (true);

-- Only authenticated users (you) can read
create policy "Authenticated can read rsvps"
  on rsvps for select
  using (auth.role() = 'authenticated');
