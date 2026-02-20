# EnergyBillCruncher

A production-ready solar lead generation platform with full backend integration, ZIP code to electric provider lookup, and compliance integrations.

## Architecture Decision Record (ADR)

### Why React + Vite over Next.js
- **Decision**: Used React with Vite instead of Next.js for this client-side rendered landing page
- **Rationale**: Faster build times, simpler deployment to static hosting, and no SSR needed for a lead-gen landing page
- **Trade-off**: Lost some SEO benefits of SSR, but gained faster Time-to-Interactive

### Why Zod + React Hook Form
- **Decision**: Zod for schema validation with React Hook Form
- **Rationale**: Type-safe form validation, excellent TypeScript integration, minimal bundle size
- **Alternative considered**: Yup - Zod has better TypeScript inference

### Why Framer Motion
- **Decision**: Framer Motion for animations
- **Rationale**: Declarative API, excellent performance, easy to implement scroll-triggered animations
- **Trade-off**: Slightly larger bundle than CSS animations, but much more maintainable

### ZIP Code to Provider Mapping
- **Decision**: Client-side mapping with comprehensive dataset
- **Rationale**: Instant lookup without API call latency, works offline
- **Data source**: Compiled from public utility commission records and EIA data

## Features

### Frontend
- ✅ Responsive design (mobile-first)
- ✅ Animated sections with scroll triggers
- ✅ ZIP code validation
- ✅ Multi-step lead capture form
- ✅ TCPA compliance checkbox
- ✅ Newsletter subscription

### Backend Integration
- ✅ ZIP code to electric provider lookup (all 50 states)
- ✅ Lead submission with validation
- ✅ Zapier webhook integration
- ✅ Jornaya Lead ID integration
- ✅ TrustedForm certificate integration
- ✅ Local storage for demo leads

### Compliance
- ✅ TCPA opt-in (required manual check)
- ✅ Privacy policy links
- Terms & disclosures
- Do Not Sell My Info link

## File Structure

```
src/
├── sections/
│   ├── Navigation.tsx      # Top nav with dropdowns
│   ├── Hero.tsx            # Main CTA with ZIP input
│   ├── Steps.tsx           # How it works (1-2-3)
│   ├── SolarChoice.tsx     # Solar benefits section
│   ├── WhySolar.tsx        # Feature cards
│   ├── FreeSolar.tsx       # Incentives info
│   ├── SolarLearning.tsx   # Educational topics
│   ├── Blog.tsx            # Article grid
│   ├── Stats.tsx           # Animated counters
│   ├── CTA.tsx             # Final call-to-action
│   ├── Footer.tsx          # Newsletter + links
│   └── LeadFormModal.tsx   # Multi-step lead form
├── data/
│   └── providers.ts        # ZIP→Provider mapping
├── services/
│   └── api.ts              # API functions
├── types/
│   └── index.ts            # TypeScript definitions
├── App.tsx                 # Main component
└── index.css               # Global styles
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
VITE_ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/YOUR_ID
VITE_JORNAYA_ACCOUNT_ID=your_jornaya_id
VITE_TRUSTED_FORM_ACCOUNT_ID=your_trustedform_id
```

## Setup Instructions

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment Checklist

- [ ] Configure environment variables
- [ ] Set up Zapier webhook
- [ ] Configure Jornaya account
- [ ] Configure TrustedForm account
- [ ] Update privacy policy
- [ ] Test lead submission flow
- [ ] Verify TCPA compliance
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit

## Lead Flow

1. User enters ZIP code on hero
2. System looks up electric providers
3. Lead form modal opens with provider info
4. User completes multi-step form
5. Lead data sent to Zapier webhook
6. Jornaya & TrustedForm IDs captured
7. Lead stored in localStorage (demo)

## Integration Notes

### Zapier Webhook
The webhook receives a JSON payload with:
- Lead ID, contact info, ZIP code
- Electric providers in area
- Jornaya Lead ID
- TrustedForm certificate URL
- Timestamp and user agent

### Jornaya Integration
- Script loaded dynamically
- Lead ID generated and stored
- Sent with lead submission

### TrustedForm Integration
- Script loaded dynamically
- Certificate URL captured
- Sent with lead submission

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Targets

- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- Bundle size < 200KB (gzipped)

## License

Proprietary - EnergyBillCruncher
