# Agent Guidelines for michaelholley.de

## Tech Stack

- **Framework**: SvelteKit with Runes Mode and Remote-Functions
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS v4 with tailwind-merge for dynamic classes
- **TypeScript**: Strict mode enabled

## Commands

- `pnpm dev` - Start dev server (requires local running CMS)
- `pnpm dev:prod` - Start dev server with content fed via Prod-CMS (best for local development)
- `pnpm build` - Production build
- `pnpm check` - Type checking with svelte-check
- `pnpm lint` - Run prettier + eslint checks
- `pnpm format` - Auto-format all files
- `pnpm test` - Run all tests once
- `pnpm test:unit` - Run tests in watch mode

## Tooling

- **Markdown**: Use `marked` for markdown parsing. When using it, ensure you use the custom renderer from `#lib/components/shared/util/markedRenderer.js` to ensure links are handled correctly (e.g., `target="_blank"`).
- **Analytics**: When adding or expanding user-facing features, extend Umami tracking for the new interactions and keep the event types in `src/lib/analytics/umami.ts` up to date.

## Git & Commits

- **Conventional Commits**: Use `feat`, `fix`, `chore`, `test`, or `refactor` types (e.g., `feat: add search docs tool`)

## Code Style

- **Formatting**: Prettier with tabs, single quotes
- **Imports**: Use the `#lib/*` alias with a `.js` extension for internal imports (e.g. `#lib/utils.js`), group by external/internal
- **Components**: Use Svelte 5 runes (`$props()`, `$state()`, `$derived()`)
- **Props**: Destructure and type them inline: `const { blog }: { blog: Blog } = $props()`
- **Styling**: Use `cn()` utility from `#lib/utils.js` to merge Tailwind classes
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Icons**: Use `@iconify/svelte` for all icons

## SEO

When adding a page or route:

- **Sitemap**: Add public routes to `src/routes/sitemap.xml/+server.ts`; it isn't generated from the route tree.
- **Noindex**: Error, draft and utility routes get `<meta name="robots" content="noindex" />` and stay out of the sitemap.
- **Global tags**: `canonical`, `og:url`, `og:site_name` and `og:locale` come from `src/routes/+layout.svelte`. Don't repeat them per page.

## Strapi (CMS)

Data flows Strapi → `src/lib/server/services/strapi.service.ts` → remote functions in `src/lib/api/*.remote.ts` → components.

- **Fetching**: Add fetchers to `strapi.service.ts`, wrapped in its `cached()` helper. Build URLs with `buildStrapiUrl()` and select only the fields you need. A missing entry returns `null`; Strapi being down returns 503, so outages don't get pages de-indexed as 404s.
- **Types**: Infer types from Zod schemas in `src/lib/server/types.ts`. Responses are cast, not parsed. Make relative image URLs absolute in the service, like `normalizeImage()` does.
- **Remote functions**: Expose data through `query()` in `src/lib/api/`. Page lookups (e.g. by slug) turn `null` into `error(404)`; optional sections pass `null` through and hide themselves. Render markdown to HTML there, not in components.
