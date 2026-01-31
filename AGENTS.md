# Agent Guidelines for michaelholley.de

## Tech Stack

- **Framework**: SvelteKit 2 with Svelte 5 (runes mode)
- **Package Manager**: pnpm (v9.15.9)
- **Styling**: Tailwind CSS v4 with tailwind-merge for dynamic classes
- **TypeScript**: Strict mode enabled

## Commands

- `pnpm dev` - Start dev server
- `pnpm build` - Production build
- `pnpm check` - Type checking with svelte-check
- `pnpm lint` - Run prettier + eslint checks
- `pnpm format` - Auto-format all files
- `pnpm test` - Run all tests once
- `pnpm test:unit` - Run tests in watch mode

## Git & Commits

- **Conventional Commits**: Use `feat`, `fix`, `chore`, `test`, or `refactor` types (e.g., `feat: add search docs tool`)

## Code Style

- **Formatting**: Prettier with tabs, single quotes, 100 char width, no trailing commas
- **Imports**: Use `$lib` alias for internal imports, group by external/internal
- **Components**: Use Svelte 5 runes (`$props()`, `$state()`, `$derived()`)
- **Props**: Destructure with `$props<Type>()`, use TypeScript interfaces
- **Styling**: Use `cn()` utility from `$lib/utils` to merge Tailwind classes
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Icons**: Use `@iconify/svelte` for all icons

---

When you need to search docs, use `context7` tools.
