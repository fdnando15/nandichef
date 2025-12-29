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

# Style and Design Guide - Nandi Chef

## Typography System

### Font Families

- **Headings/Titles**: "Poppins" or "Montserrat" (semibold/bold)
- **Body Text**: "Inter" or "Open Sans" (regular/medium)
- **Logo/Brand**: "Pacifico" (branding only)

### Size Scale

- **Logo**: 24-28px
- **Section headings**: 24px
- **Dish names**: 16px (semibold)
- **Descriptions**: 13px (line-height: 1.4)
- **Prices**: 18px (bold)

---

## Color Palette

| Color             | Hex Code  | Usage                               |
| ----------------- | --------- | ----------------------------------- |
| **Primary**       | `#E8734E` | Warm orange - main elements, CTAs   |
| **Secondary**     | `#2D5016` | Olive green - accents, categories   |
| **Accent**        | `#F4A261` | Light orange - highlighted elements |
| **Dark Neutral**  | `#2B2B2B` | Main text color                     |
| **Light Neutral** | `#FAF9F6` | Backgrounds                         |
| **Alert**         | `#D4A373` | Beige/golden - allergen indicators  |
| **WhatsApp**      | `#25D366` | WhatsApp button                     |

---

## Spacing and Layout

### Container

- **Max-width**: 640px (centered)
- **Mobile padding**: 16px horizontal

### Vertical Spacing

- **Between sections**: 40px
- **Between cards**: 16px
- **Card internal padding**: 12px

---

## Specific Components

### Cards

- **Border-radius**: 12px
- **Box-shadow**: Subtle for elevation
- **Background**: White

### Buttons

- **Border-radius**: Rounded
- **Padding**: Appropriate for touch targets
- **Visual feedback**: Immediate on interaction

### Dish Images

- **Size**: 80x80px
- **Border-radius**: 8px
- **Object-fit**: cover

---

## Microinteractions

### Transitions

- **Duration**: 300ms
- **Easing**: ease-in-out
- **Apply to**: hover/tap, color changes, shadows

### Animations

- **Smooth scroll**: Implemented with CSS
- **Pulse**: WhatsApp button
- **Scale**: 1.02 on card hover/tap

---

## Responsive Design

### Approach

- **Mobile-first approach**: Design for mobile first
- **Grid**: 1 column on mobile devices
- **Touch targets**: Minimum 44x44px for interactive elements

---

## Implementation Notes

- Prioritize mobile experience (80%+ expected traffic)
- Keep design warm and approachable
- Emphasize homemade, quality feel
- Minimize clicks to contact/order
- Fast loading is critical for user retention
