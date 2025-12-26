# Nandi Chef - Homemade Takeaway Food Website Plan

## Project Overview
A mobile-first web application for "Nandi Chef", a local homemade takeaway food business. The experience is designed to replicate scanning a QR code and viewing a digital menu optimized for mobile devices.

---

## Color Palette

| Color | Hex Code | Purpose |
|-------|----------|---------|
| Primary | `#E8734E` | Warm orange/terracotta - evokes warmth, homemade food, appetite |
| Secondary | `#2D5016` | Dark olive green - conveys freshness, natural ingredients |
| Accent | `#F4A261` | Light orange - CTAs and highlighted elements |
| Dark Neutral | `#2B2B2B` | Main text color |
| Light Neutral | `#FAF9F6` | Backgrounds, gives artisanal feel |
| Alert | `#D4A373` | Beige/golden - for allergen indicators |
| WhatsApp | `#25D366` | WhatsApp integration button |

---

## Typography System

### Font Families
- **Headings/Titles**: "Poppins" or "Montserrat" (semibold/bold)
- **Body Text**: "Inter" or "Open Sans" (regular/medium)
- **Logo/Brand Accents**: Script typography like "Pacifico" (branding only)

### Size Scale
- Logo: 24-28px
- Section Headings: 24px
- Dish Names: 16px (semibold)
- Descriptions: 13px (line-height: 1.4)
- Prices: 18px (bold)

---

## UI Component Architecture

### 1. Header/Navigation Component
**File Location**: `app/ui/salon/navbar.tsx` (already exists)

**Visual Characteristics:**
- Sticky header with `#FAF9F6` background
- Subtle shadow on scroll for depth
- "Nandi Chef" logo centered in script typography (`#E8734E`)
- Header height: ~60px on mobile
- Horizontal scrollable category navigation pills
  - Categories: Starters, Mains, Desserts, Drinks
  - Pills: rounded corners, transparent default
  - Active pill: `#E8734E` background, white text
  - Smooth transitions

**Interactions:**
- Horizontal swipe-style scroll
- Tap category → smooth scroll to section
- Visual indicator of active section during scroll

---

### 2. Hero/Banner Component
**File Location**: `app/ui/salon/hero-section.tsx` (already exists)

**Visual Characteristics:**
- Minimum height: 200px on mobile
- Background image with dark overlay (opacity 0.4)
- Main text: "Homemade food with love" - white, centered
- CTA button: "View Menu" - `#F4A261` background, rounded corners
- Optional: opening hours display

**Performance:**
- Use Next.js Image component with priority loading
- WebP format, optimized dimensions
- Blur placeholder for smooth loading

---

### 3. Menu Section Component
**File Location**: `app/ui/salon/menu-section.tsx` (to be created)

**Structure:**
- Section title: bold, `#2D5016`, 24px, generous top margin
- List of food item cards
- Lazy loading after first 3-4 items

---

### 4. Food Item Card Component
**File Location**: `app/ui/salon/food-item-card.tsx` (to be created)

**Layout (Horizontal Card):**
```
┌────────────────────────────────────────┐
│ [Image]  │ [Dish Name]                 │
│  80x80px │ [Brief description...]      │
│          │ [Icons] [Price] €           │
└────────────────────────────────────────┘
```

**Specifications:**
- Background: white
- Border-radius: 12px
- Box-shadow: subtle elevation
- Padding: 12px
- Margin-bottom: 16px

**Elements:**
- **Image**: 
  - Size: 80x80px
  - Border-radius: 8px
  - Object-fit: cover
  - Next.js Image component (lazy loaded)
  
- **Dish Name**: 
  - Semibold, 16px, `#2B2B2B`
  
- **Description**: 
  - 13px, `#666666`
  - Line-height: 1.4
  - Max 2 lines with ellipsis
  
- **Allergen Icons**: 
  - Size: 20x20px
  - Background: `#D4A373`
  - White icons
  - 4px gap between icons
  - Tooltip/modal on tap
  
- **Price**: 
  - Bold, 18px, `#E8734E`
  - Right-aligned
  - Format: "X.XX €"

**States:**
- Hover/Tap: scale(1.02) + enhanced shadow
- Sold Out: semi-transparent overlay + badge

---

### 5. Allergen Modal Component
**File Location**: `app/ui/salon/allergen-modal.tsx` (to be created)

**Design:**
- Bottom-sheet modal on mobile
- White background
- Top border-radius: 20px
- Close button (X) top-right
- List with large icons + names + descriptions

**Performance:**
- Dynamic import (loads only when needed)
- Reduces initial bundle size

---

### 6. Contact Section Component
**File Location**: `app/ui/salon/contact-section.tsx` (to be created)

**Content:**
- Address: location icon + text
- Phone: phone icon + clickable `tel:` link
- WhatsApp: featured button (see below)
- Hours: clock icon + opening hours
- Social media: Instagram/Facebook icons

---

### 7. Floating WhatsApp Button
**File Location**: `app/ui/salon/whatsapp-button.tsx` (to be created)

**Specifications:**
- Circular: 56x56px
- Background: `#25D366`
- White WhatsApp icon
- Position: fixed, bottom-right (20px from edges)
- Box-shadow: pronounced elevation
- Subtle pulse animation
- High z-index
- Link: `https://wa.me/34XXXXXXXXX`

**Performance:**
- Pure CSS animation (no JavaScript)
- Fixed position (hardware accelerated)

---

### 8. Footer Component
**File Location**: `app/ui/salon/footer.tsx` (already exists)

**Content:**
- Brand information
- Quick links
- Social media
- Copyright notice
- Background: `#2D5016` or `#FAF9F6`

---

## Layout & Spacing System

### Container
- Max-width: 640px (centered)
- Mobile padding: 16px horizontal

### Vertical Spacing
- Between sections: 40px
- Between cards: 16px
- Internal card padding: 12px

### Grid
- Mobile: 1 column (vertical stack)
- Tablet/Desktop: consider 2 columns

---

## Performance Requirements

### 1. Image Optimization (CRITICAL)
**Mandatory Implementation:**
- Use Next.js `<Image>` component for ALL images
- Format: WebP with AVIF fallback
- Maximum dimensions: 320x320px
- File size target: under 50KB per image
- Blur placeholders for smooth loading
- Lazy loading for all images except hero + first 3-4 menu items

**Pre-processing:**
- Resize source images to exact dimensions before deployment
- Compress with tools like ImageOptim, Squoosh, or Sharp
- Never upload raw phone photos (can be 3-5MB each)

### 2. Loading Strategy
**Initial Load:**
- Hero section
- First 3-4 menu items only
- Critical CSS inline
- Remaining items lazy load on scroll

**Virtual Scrolling:**
- Implement if menu exceeds 20 items
- Only visible items render in DOM
- Dramatically reduces memory usage

**Dynamic Imports:**
- Modals (allergen modal)
- Components below the fold
- WhatsApp button (if complex)

### 3. Static Site Generation (SSG)
**Implementation:**
- Generate entire menu statically at build time
- Use ISR (Incremental Static Regeneration)
- Revalidation: 1 hour (3600 seconds)
- Menu data: JSON file or TypeScript constants
- Zero server functions needed
- Everything served from Vercel Edge CDN

### 4. Caching Strategy
**Headers:**
- Images: `Cache-Control: public, max-age=31536000, immutable` (1 year)
- Menu data: `Cache-Control: public, max-age=3600, stale-while-revalidate=86400`
- Static assets: `Cache-Control: public, max-age=31536000, immutable`

**Vercel Automatic Optimizations:**
- Brotli compression
- CDN caching
- Image optimization through Vercel CDN
- Automatic WebP/AVIF conversion

### 5. Performance Targets
**Metrics:**
- First Load JavaScript: < 100KB gzipped
- Total page weight: < 500KB
- Time to Interactive (TTI): < 2 seconds on 3G
- Largest Contentful Paint (LCP): < 2.5 seconds
- Cumulative Layout Shift (CLS): < 0.1
- First Contentful Paint (FCP): < 1.8 seconds
- Lighthouse Performance Score: > 90

**Resource Consumption:**
- First visit: ~500KB
- Repeat visits: ~50KB (cached)
- Supports 100,000+ monthly visitors on Vercel free tier

### 6. What to Avoid (CRITICAL)
❌ Loading all menu images simultaneously  
❌ Using unoptimized photos straight from phones  
❌ Client-side data fetching for static menu content  
❌ Heavy JavaScript libraries (use lightweight alternatives)  
❌ JavaScript animations when CSS works  
❌ Multiple external font weights (limit to 2-3 weights max)  
❌ Inline SVGs for repeated icons (use sprite sheet)  
❌ Synchronous loading of non-critical resources  

---

## Microinteractions & Animation

### Transitions
- Duration: 300ms
- Easing: ease-in-out
- Apply to: hover/tap states, color changes, shadows

### Smooth Scroll
- CSS: `scroll-behavior: smooth`
- Smooth navigation between sections

### Loading States
- Skeleton screens for image loading
- Blur-up technique for images
- Loading spinners for modals

### Button Feedback
- Immediate visual feedback on tap
- Scale or color change
- Avoid delays

---

## Accessibility (WCAG AA Compliance)

### Contrast
- Minimum 4.5:1 for normal text
- Minimum 3:1 for large text (18px+)
- Test all color combinations

### Touch Targets
- Minimum size: 44x44px
- Adequate spacing between interactive elements
- Prevent accidental taps

### Screen Readers
- Descriptive alt text for all images
- ARIA labels for allergen icons
- Semantic HTML (nav, main, section, article)
- Skip to content link

### Keyboard Navigation
- All interactive elements keyboard accessible
- Visible focus indicators
- Logical tab order

---

## Tech Stack

### Core
- **Framework**: Next.js 14+ (App Router)
- **React**: Latest stable version
- **TypeScript**: Strict mode enabled
- **Styling**: Tailwind CSS

### Utilities
- **Icons**: Heroicons or Lucide React (tree-shakeable)
- **Classnames**: `clsx` for conditional classes
- **Image Optimization**: Next.js Image component
- **Fonts**: next/font for optimization

### Development
- **Package Manager**: pnpm
- **Linting**: ESLint (Next.js config)
- **Formatting**: Prettier (optional)

---

## File Structure

```
app/
├── ui/
│   ├── salon/
│   │   ├── navbar.tsx ✅ (exists)
│   │   ├── hero-section.tsx ✅ (exists)
│   │   ├── footer.tsx ✅ (exists)
│   │   ├── menu-section.tsx ❌ (to create)
│   │   ├── food-item-card.tsx ❌ (to create)
│   │   ├── allergen-modal.tsx ❌ (to create)
│   │   ├── contact-section.tsx ❌ (to create)
│   │   └── whatsapp-button.tsx ❌ (to create)
│   └── fonts.ts ✅ (exists)
├── lib/
│   ├── menu-data.ts ❌ (to create - menu items)
│   └── definitions.ts ✅ (exists - add types)
├── page.tsx ✅ (exists - homepage)
└── layout.tsx ✅ (exists - root layout)

public/
├── menu-images/
│   ├── starters/
│   ├── mains/
│   ├── desserts/
│   └── drinks/
└── icons/
    └── allergens/
```

---

## Data Structure

### Menu Item Type
```typescript
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  image: string; // path to image
  allergens: Allergen[];
  available: boolean;
}

interface Allergen {
  id: string;
  name: string;
  icon: string;
  description: string;
}
```

---

## Implementation Phases

### Phase 1: Foundation (Week 1)
- [ ] Set up color system in Tailwind config
- [ ] Configure fonts with next/font
- [ ] Create type definitions for menu items
- [ ] Prepare and optimize all food images
- [ ] Create menu-data.ts with static data

### Phase 2: Core Components (Week 2)
- [ ] Build Food Item Card component
- [ ] Build Menu Section component
- [ ] Implement lazy loading for images
- [ ] Add allergen icons and functionality
- [ ] Create Allergen Modal (dynamic import)

### Phase 3: Layout & Navigation (Week 3)
- [ ] Update Navbar with category navigation
- [ ] Update Hero Section with CTA
- [ ] Implement smooth scrolling
- [ ] Add active section indicator
- [ ] Mobile-first responsive adjustments

### Phase 4: Features & Polish (Week 4)
- [ ] WhatsApp floating button
- [ ] Contact section
- [ ] Footer updates
- [ ] Microinteractions and animations
- [ ] Loading states and skeletons

### Phase 5: Optimization & Testing (Week 5)
- [ ] Run Lighthouse audit
- [ ] Optimize images further if needed
- [ ] Implement ISR with revalidation
- [ ] Test on real devices (iOS, Android)
- [ ] Accessibility audit (WCAG AA)
- [ ] Performance monitoring setup

---

## Testing Checklist

### Performance
- [ ] Lighthouse score > 90 on mobile
- [ ] First Load JS < 100KB
- [ ] Total page weight < 500KB
- [ ] TTI < 2s on 3G

### Functionality
- [ ] Category navigation works
- [ ] Smooth scrolling functions
- [ ] Allergen modal opens/closes
- [ ] WhatsApp link works
- [ ] Phone link works (tel:)
- [ ] All images load correctly

### Responsive Design
- [ ] Test on iPhone SE (375px)
- [ ] Test on iPhone 12/13 (390px)
- [ ] Test on Android (various sizes)
- [ ] Test on tablet (768px+)
- [ ] Test on desktop (1024px+)

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast passes WCAG AA
- [ ] Touch targets ≥ 44x44px
- [ ] Focus indicators visible

### Browser Compatibility
- [ ] Chrome (mobile & desktop)
- [ ] Safari (mobile & desktop)
- [ ] Firefox
- [ ] Edge

---

## Deployment Configuration

### Vercel Settings
- **Framework**: Next.js
- **Build Command**: `pnpm build`
- **Output Directory**: `.next`
- **Install Command**: `pnpm install`
- **Node Version**: 18.x or 20.x

### Environment Variables
```
# Add any necessary environment variables here
# Example:
# NEXT_PUBLIC_WHATSAPP_NUMBER=34XXXXXXXXX
```

### ISR Configuration
```typescript
// In page.tsx or data fetching
export const revalidate = 3600; // 1 hour
```

---

## Success Metrics

### Technical
- Lighthouse Performance: > 90
- Lighthouse Accessibility: 100
- Lighthouse Best Practices: > 90
- Lighthouse SEO: > 90
- Core Web Vitals: All green

### Business
- Time to first interaction: < 2s
- Bounce rate: < 40%
- Mobile traffic: > 80% (expected)
- WhatsApp click-through rate: > 15%
- Page load errors: < 1%

---

## Future Enhancements (Post-Launch)

- [ ] Multi-language support (Spanish/English)
- [ ] Online ordering integration
- [ ] Daily specials section
- [ ] Customer reviews/testimonials
- [ ] Newsletter signup
- [ ] Instagram feed integration
- [ ] Push notifications for new dishes
- [ ] Admin panel for menu updates
- [ ] Analytics dashboard
- [ ] PWA capabilities (offline menu)

---

## Notes

- Prioritize mobile experience (80%+ expected traffic)
- Keep design warm and approachable
- Emphasize homemade, quality feel
- Make ordering via WhatsApp extremely easy
- Minimize clicks to contact/order
- Fast loading is critical for user retention

---

**Last Updated**: December 26, 2025  
**Status**: Planning Phase  
**Next Action**: Begin Phase 1 - Foundation Setup
