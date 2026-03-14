This is a [Next.js](https://nextjs.org) project configured for static export so it can be deployed to Cloudflare Pages.

## Local Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

Run:

```bash
npm run build
```

The static site will be generated in the `out/` directory.

## Deploy To Cloudflare Pages

This repo is set up to use Next.js static export on Cloudflare Pages.

Use these Pages build settings:

- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run build`
- Build output directory: `out`
- Node.js version: `20` or newer

Cloudflare dashboard flow:

1. Push this repo to GitHub.
2. In Cloudflare, open `Workers & Pages`.
3. Create a new Pages project from the Git repository.
4. Apply the build settings above and deploy.

## Why This Works

- `next.config.ts` uses `output: "export"` so `next build` emits a static site.
- The production build uses webpack (`next build --webpack`) to avoid Turbopack export issues in restricted environments.
- `next/image` is configured with `unoptimized: true`, which is required for static export without a custom image loader.
- The dynamic route at `src/app/designs/[id]/page.tsx` defines `generateStaticParams()` so those pages can be pre-rendered at build time.
- The app no longer depends on `next/font/google`, so builds do not rely on fetching Google Fonts during deployment.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js Static Exports](https://nextjs.org/docs/app/guides/static-exports)
- [Cloudflare Pages Next.js Static Site Guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
