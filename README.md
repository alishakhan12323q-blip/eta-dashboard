# ETA Dashboard with Vercel Web Analytics

A Next.js dashboard application with integrated Vercel Web Analytics for tracking user interactions and page views.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Vercel account (for deploying and viewing analytics)

### Installation

1. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

2. Run the development server:
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Vercel Web Analytics Setup

This project includes Vercel Web Analytics integration. The `Analytics` component from `@vercel/analytics/next` is already configured in the root layout.

### Enabling Analytics in Vercel Dashboard

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select this project
3. Click the **Analytics** tab
4. Click **Enable** to activate Web Analytics

Once enabled and deployed, analytics will automatically track:
- Page views
- Web Vitals
- User interactions (when custom events are configured)

### View Your Analytics

After deployment:
1. Visit your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. Explore your data with built-in filters

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with Analytics component
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── page.module.css     # Page-specific styles
├── package.json
├── next.config.js
├── tsconfig.json
├── .eslintrc.json
└── vercel.json
```

## Deployment

Deploy to Vercel with:
```bash
vercel deploy
```

Or connect your Git repository for automatic deployments.

## Learn More

- [Vercel Web Analytics Documentation](https://vercel.com/docs/analytics)
- [Next.js Documentation](https://nextjs.org/docs)
- [Analytics Package Reference](https://vercel.com/docs/analytics/package)

## License

MIT
