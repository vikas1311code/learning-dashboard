# LearnOS Dashboard

Frontend intern challenge. Next.js 14 + Supabase + Tailwind + Framer Motion.

## Setup

npm install
cp .env.example .env.local
npm run dev

Open http://localhost:3000

## Supabase

Create a project, run this in SQL editor:

create table courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  progress integer default 0,
  icon_name text default 'book',
  created_at timestamp with time zone default now()
);

insert into courses (title, progress, icon_name) values
  ('Advanced React Patterns', 75, 'code-2'),
  ('Node.js Backend Mastery', 45, 'terminal'),
  ('UI/UX Design Fundamentals', 60, 'layers'),
  ('Database Engineering', 30, 'database');

Copy Project URL + anon key from Settings > API.

## Notes

Data fetching is in server components. CoursesSection is async, wrapped in Suspense.
Client components handle animations and state.
Sidebar auto-collapses on tablet via resize listener.

## Known issues

- User info is hardcoded, would need auth in production
- Activity graph is random, should come from DB eventually
- Mobile needs more polish on very small screens
update
