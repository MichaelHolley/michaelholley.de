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

## Code Style

- **Formatting**: Prettier with tabs, single quotes, 100 char width, no trailing commas
- **Imports**: Use `$lib` alias for internal imports, group by external/internal
- **Components**: Use Svelte 5 runes (`$props()`, `$state()`, `$derived()`)
- **Props**: Destructure with `$props<Type>()`, use TypeScript interfaces
- **Styling**: Use `cn()` utility from `$lib/utils` to merge Tailwind classes
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Icons**: Use `@iconify/svelte` for all icons

---

You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available MCP Tools

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.
