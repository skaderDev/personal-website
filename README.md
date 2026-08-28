# Safwan Kader — Personal Website

A small portfolio built with Next.js, TypeScript, and Tailwind CSS.

Requires Node.js 20.9 or newer.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production check

```bash
npm run lint
npm run build
```

The deployable static site is generated in `out/`.

## Deploying to GitHub Pages

Push the `main` branch to GitHub, then open **Settings → Pages** in the
repository and select **GitHub Actions** as the source. The included workflow
builds and deploys the site on every push to `main`.

The deployment is configured for the custom root domain `safwan.io`. If the
domain changes, update `NEXT_PUBLIC_SITE_URL` in the Pages workflow.

Before publishing, confirm that the professional details in `src/app/about`,
`src/app/experience`, and `src/app/projects` are current.
