# Agent Guidelines for nextjs-dashboard

## Build/Dev Commands
- `pnpm dev` - Start dev server with Turbopack
- `pnpm build` - Build production bundle
- `pnpm start` - Start production server
- No test suite configured currently

## Code Style
- **TypeScript**: Strict mode enabled, use explicit types for function params/returns
- **Imports**: Use `@/` path alias for project imports (e.g., `@/app/ui/fonts`)
- **Formatting**: Double quotes for strings, 2-space indentation
- **Naming**: camelCase for variables/functions, PascalCase for components/types
- **Components**: Use async Server Components by default, export default for pages
- **Error Handling**: Try-catch with `console.error()`, throw descriptive Error messages
- **Database**: Use postgres template literals with proper type annotations
- **Styling**: Tailwind CSS classes, use `clsx` for conditional classes
- **Types**: Define in `app/lib/definitions.ts`, import from there

## Project Structure
- `/app` - Next.js App Router (pages, layouts, UI components)
- `/app/lib` - Data fetching, utilities, type definitions
- `/app/ui` - Reusable UI components organized by feature
