# NextBot: Discover AI-powered robotics that fit your lifestyle.

NextBot is a full-stack e-commerce app for buying robotics products (humanoids and robot dogs).

I built this project as a deep dive to strengthen my skills with Supabase (PostgreSQL + RLS), GraphQL, and in designing a scalable end-to-end web application. It uses the Next.js App Router, GraphQL for data fetching, Supabase for PostgreSQL + RLS, Drizzle for schema/migrations and seeding, Tailwind CSS + shadcn/ui for the UI, and AWS S3 for media uploads.

<a href="https://myvediosportfolio.s3.eu-north-1.amazonaws.com/nextbotscreen.png"><img src="https://myvediosportfolio.s3.eu-north-1.amazonaws.com/nextbotscreen.png" alt="NextBot" border="0"></a>

**Live Demo:** <a href="https://nextbotstore.netlify.app/" target="_blank">https://nextbotstore.netlify.app/</a>  
**Video Demo:** <a href="https://myvediosportfolio.s3.eu-north-1.amazonaws.com/Nextbot.mp4" target="_blank">https://myvediosportfolio.s3.eu-north-1.amazonaws.com/Nextbot.mp4</a>

## Features

- **GraphQL Search** – Flexible, fast queries with lean data fetching.
- **Next.js 14 App Router** – Modern routing for performance and structure.
- **Direct S3 Uploads** – Custom uploader sending files straight to Amazon S3.
- **Supabase RLS** – Row-level security to protect user data.
- **Zod Validation** – Strong validation for forms and routes.
- **Responsive UI** – Works flawlessly on all devices.
- **Drizzle ORM** – Typed schema and migrations for reliable DB work.
- **SEO Ready** – Optimized metadata for discoverability.

## Tech Stack

Next.js 14 | React 18 + TypeScript | GraphQL | Supabase (Postgres) | Drizzle ORM | Zod | AWS S3 | Tailwind CSS | shadcn/ui

## Getting Started

**Prerequisites**

- Node.js (v12.x or later)
- npm or yarn

1. Clone the repository:

   ```bash
   git clone https://github.com/OuailTayarth/nextbot_ecommerce_store.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nextbot_ecommerce_store
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

Open http://localhost:3000

## License

MIT
