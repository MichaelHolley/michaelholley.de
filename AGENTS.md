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

- **Markdown**: Use `marked` for markdown parsing. When using it, ensure you use the custom renderer from `$lib/components/shared/util/markedRenderer` to ensure links are handled correctly (e.g., `target="_blank"`).
- **Analytics**: When adding or expanding user-facing features, extend Umami tracking for the new interactions and keep the event types in `src/lib/analytics/umami.ts` up to date.

## Git & Commits

- **Conventional Commits**: Use `feat`, `fix`, `chore`, `test`, or `refactor` types (e.g., `feat: add search docs tool`)

## Code Style

- **Formatting**: Prettier with tabs, single quotes
- **Imports**: Use `$lib` alias for internal imports, group by external/internal
- **Components**: Use Svelte 5 runes (`$props()`, `$state()`, `$derived()`)
- **Props**: Destructure with `$props<Type>()`, use TypeScript interfaces
- **Styling**: Use `cn()` utility from `$lib/utils` to merge Tailwind classes
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Icons**: Use `@iconify/svelte` for all icons

## Content Writing

Applies to all user-facing copy: headlines, bios, project descriptions, CTAs, meta descriptions, alt text.

- **Audience**: Write for a busy recruiter, hiring manager or client skimming for 30 seconds. They want to know who I am, what I build, and whether I can solve their problem.
- **Voice**: First person, active voice, confident but not boastful. Write like a senior engineer talking to a peer, not a marketing department.
- **Lead with the point**: Put the key message first in every page, section and paragraph. Assume nothing below the first sentence gets read.
- **Show, don't claim**: Replace adjectives ("passionate", "innovative", "results-driven") with evidence. Name the problem, the decision, and the outcome.
- **Be specific**: Use concrete numbers, technologies, scale and timeframes (e.g. "cut build time from 8 to 2 minutes" instead of "improved performance").
- **Projects**: Structure as context → my role → approach and key trade-offs → outcome. Make clear what I did versus what the team did.
- **Brevity**: Short sentences, short paragraphs (max 3–4 lines). Cut filler words, hedging and repetition. If a sentence can be deleted without losing information, delete it.
- **Scannable**: Use descriptive headings, short lists and bold key facts sparingly so the page works when skimmed.
- **Plain language**: Avoid buzzwords and unexplained jargon. Tech names are fine; acronyms that a non-engineer wouldn't know need context.
- **Honesty**: Never invent metrics, clients, or skills. If a number isn't known, describe the outcome qualitatively instead.
- **Calls to action**: End key pages with one clear next step (contact, CV, project link). Use action-oriented labels ("Get in touch", not "Click here").
- **Accessibility**: Write meaningful alt text describing what an image shows and why it matters. Link text must make sense out of context.
- **Consistency**: Keep tense, spelling variant, capitalisation of product names, and date formats consistent within a language. Don't mix languages on a single page.
- **SEO**: Page titles under ~60 characters, meta descriptions under ~155 characters, both written for humans first.
