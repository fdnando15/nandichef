# Hair Salon Website - Project Planning

## 🎯 Project Overview
Modern, beautiful hair salon website with booking functionality, social media integration, and e-commerce capabilities.

## 📋 Core Features (MVP)

### 1. Navigation Bar
**Style**: Modern, elegant navbar with smooth animations
- **Links**:
  - Home
  - About Us
  - Services
  - Gallery
  - Book Appointment (CTA button - highlighted)
  - Shop
  - Contact
- **Design**: Sticky/fixed navbar, transparent on scroll with backdrop blur
- **Mobile**: Hamburger menu with smooth slide-in animation

### 2. Home Page
**Hero Section**:
- Background: Animated GIF/video of hairdresser cutting hair (looped, optimized)
- Overlay: Semi-transparent gradient for text readability
- CTA Button: "Book Your Appointment" (prominent, animated)
- Tagline: Salon name + catchy slogan

**Social Media Feed Section**:
- Instagram posts/reels grid (6-9 latest posts)
- TikTok videos embedded
- Facebook/YouTube integration
- Social media icons with links
- Auto-refresh feed (using Instagram/TikTok APIs)

**Services Preview**:
- Cards with: Haircuts, Coloring, Styling, Treatments
- Brief description + "Learn More" button

### 3. About Us Page
**Information Display**:
- Salon story and philosophy
- Team members with photos and specialties
- Years of experience counter (animated)
- **Contact Details**:
  - Phone number (clickable for mobile)
  - Full address with embedded Google Maps
  - Business hours
  - Email address
- Certifications and awards

### 4. Book Appointment Page
**Booking System**:
- Service selection dropdown
- Stylist selection (optional)
- Date picker (calendar view)
- Time slot selection
- Customer information form
- Confirmation email
- **Integration options**: Calendly, Square Appointments, or custom solution

### 5. Gallery Page
- Before/After transformations
- Portfolio of best work
- Filter by service type
- Lightbox view for images

### 6. Shop Page (Initial Setup)
**Phase 1** (Now):
- Simple product grid
- Hair care products display
- "Coming Soon" banner
**Phase 2** (Future):
- Full e-commerce functionality

## 🎨 Design System

### Color Palette
- Primary: Elegant gold/rose gold
- Secondary: Deep charcoal/black
- Accent: Soft pink or purple
- Background: White/cream
- Text: Dark gray for readability

### Typography
- Headings: Elegant serif font (Playfair Display, Cormorant)
- Body: Clean sans-serif (Inter, Poppins)

### Components
- Buttons: Rounded, with hover animations
- Cards: Subtle shadows, smooth hover effects
- Forms: Clean, minimal with validation
- Icons: Heroicons or Lucide React

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Heroicons/Lucide

### Backend & Data
- **CMS**: Sanity.io or Contentful (for products, services, gallery)
- **Booking**: Calendly API or custom with PostgreSQL
- **Social Media**: Instagram Basic Display API, TikTok Embed
- **Email**: Resend or SendGrid

### Hosting
- **Platform**: Vercel
- **Database**: Vercel Postgres or Supabase
- **Images**: Cloudinary or Vercel Image Optimization

## 📁 Project Structure

```
/app
  /(home)
    page.tsx                 # Landing page with hero + social feed
  /about
    page.tsx                 # About us, team, contact info
  /services
    page.tsx                 # All services detailed
  /gallery
    page.tsx                 # Portfolio showcase
  /book
    page.tsx                 # Booking form/integration
  /shop
    page.tsx                 # Product catalog
    /[productId]
      page.tsx               # Individual product
  /contact
    page.tsx                 # Contact form + map
  /api
    /booking
      route.ts               # Booking submission
    /instagram
      route.ts               # Fetch Instagram feed
    /contact
      route.ts               # Contact form handler

/components
  /ui
    navbar.tsx
    footer.tsx
    button.tsx
    card.tsx
  /home
    hero-section.tsx
    social-feed.tsx
    services-preview.tsx
  /booking
    booking-form.tsx
    calendar-picker.tsx
  /shop
    product-card.tsx
    product-grid.tsx

/lib
  /api
    instagram.ts
    tiktok.ts
  /utils
    validators.ts
  types.ts
```

## 🚀 Development Phases

### Phase 1: Foundation (Week 1-2)
- [ ] Project setup with Next.js + Tailwind
- [ ] Navigation bar component
- [ ] Hero section with background GIF
- [ ] Basic routing structure
- [ ] Footer with social links

### Phase 2: Core Pages (Week 2-3)
- [ ] About Us page (info, phone, location, map)
- [ ] Services page
- [ ] Gallery page with image optimization
- [ ] Contact form

### Phase 3: Booking Integration (Week 3-4)
- [ ] Booking form design
- [ ] Calendar integration
- [ ] Email notifications
- [ ] Confirmation page

### Phase 4: Social Media (Week 4-5)
- [ ] Instagram API integration
- [ ] TikTok embed
- [ ] Auto-refreshing feed
- [ ] Social sharing buttons

### Phase 5: Shop Setup (Week 5-6)
- [ ] Product schema/CMS
- [ ] Product listing page
- [ ] Product detail pages
- [ ] "Coming Soon" e-commerce features

## 🔮 Future Enhancements

### Shop Expansion
- **Payment Integration**: Stripe/PayPal
- **Shopping Cart**: Persistent cart with local storage
- **Checkout Flow**: Multi-step checkout
- **Inventory Management**: Real-time stock tracking
- **Product Reviews**: Customer ratings and reviews
- **Loyalty Program**: Points and rewards system

### Booking Enhancements
- **Online Payments**: Deposit or full payment at booking
- **SMS Reminders**: Twilio integration
- **Loyalty Tracking**: Visit history and rewards
- **Cancellation Policy**: Automated reminders
- **Waitlist**: Notify when slots open up

### Advanced Features
- **Multi-language Support**: i18n (English/Spanish)
- **Virtual Consultation**: Video call booking
- **Blog/Tips Section**: Hair care advice, trends
- **Membership Tiers**: VIP programs
- **Gift Cards**: Digital gift card sales
- **Live Chat**: Customer support
- **Mobile App**: React Native version
- **Analytics Dashboard**: Admin panel for bookings/sales

### Marketing Features
- **Email Newsletter**: Mailchimp integration
- **Promotions**: Seasonal deals and coupons
- **Referral Program**: Refer a friend discounts
- **SEO Optimization**: Local SEO, Google My Business
- **Google Reviews**: Integration and display

## ✅ Technical Requirements

### Performance
- Lighthouse score: 90+ on all metrics
- Image optimization (WebP, lazy loading)
- GIF/video optimized and compressed (<5MB)
- Code splitting and lazy loading components

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Alt text for all images

### SEO
- Meta tags and Open Graph
- Sitemap and robots.txt
- Structured data (LocalBusiness schema)
- Fast page load times

### Security
- HTTPS only
- Form validation and sanitization
- Rate limiting on booking API
- CSRF protection

## 📊 Content Needs

### Required Assets
- **Logo**: SVG format, transparent background
- **Hero GIF/Video**: High quality, looped (max 10s)
- **Team Photos**: Professional headshots
- **Portfolio Images**: Before/after, styled shots (min 20 images)
- **Product Photos**: If shop is active
- **Copy**: About us story, service descriptions
- **Social Media**: Instagram/TikTok handles

### Before Launch
- [ ] Google Maps location verified
- [ ] Phone number and email set up
- [ ] Social media accounts active
- [ ] Business hours confirmed
- [ ] Booking system tested
- [ ] Domain name registered
- [ ] SSL certificate configured

## 💡 Notes
- Start simple, iterate based on user feedback
- Mobile-first design approach
- Test booking flow extensively
- Monitor social media API rate limits
- Plan for scalability in shop section
