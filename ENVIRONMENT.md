# Environment Configuration Guide

## Overview
This project includes environment configurations for Development, Staging, and Production environments.

## Environment Files

### 1. Development (`environment.ts`)
- **Purpose**: Local development
- **Features**: Debug logging enabled, test payment keys, local API
- **Usage**: `ng serve` or `npm start`

### 2. Staging (`environment.staging.ts`)
- **Purpose**: Pre-production testing
- **Features**: Production-like settings with staging APIs and test keys
- **Usage**: `ng serve --configuration=staging` or `npm run start:staging`

### 3. Production (`environment.prod.ts`)
- **Purpose**: Live production deployment
- **Features**: Optimized builds, live payment keys, production APIs
- **Usage**: `ng build --configuration=production` or `npm run build:prod`

## Build Commands

```bash
# Development
npm start                    # Serve with development environment
ng serve --configuration=development

# Staging
npm run start:staging        # Serve with staging environment
ng serve --configuration=staging
npm run build:staging        # Build for staging

# Production
npm run build:prod           # Build for production
ng build --configuration=production
```

## Configuration Items

### API Configuration
- `apiUrl`: Backend API base URL
- Different URLs for dev/staging/production

### Payment Gateway Settings
- **Stripe**: Test/Live publishable keys
- **Razorpay**: Test/Live key IDs
- **PayPal**: Sandbox/Live client IDs
- Enable/disable specific gateways per environment

### Firebase Configuration
- Different Firebase projects for each environment
- Separate API keys and project IDs

### Feature Flags
- `enableAnalytics`: Google Analytics tracking
- `enablePushNotifications`: Push notification support
- `enableCaching`: Application caching
- `maxCartItems`: Maximum items allowed in cart

### Debug Settings
- `enableLogging`: Console logging (disabled in production)
- `production`: Environment type flag

## Usage in Components

```typescript
import { EnvironmentService } from './services/environment.service';

constructor(private env: EnvironmentService) {}

// Access environment variables
const apiUrl = this.env.apiUrl;
const isProduction = this.env.isProduction;
const stripeKey = this.env.getStripeKey();

// Conditional logging
this.env.log('Debug message', data);
this.env.error('Error message', error);
```

## Security Notes

1. **Never commit real API keys** to version control
2. Use environment variables or CI/CD secrets for production keys
3. Test keys should be clearly marked and documented
4. Rotate keys regularly for security

## Deployment

### Development
- Runs with `environment.ts`
- All debugging features enabled
- Uses localhost APIs

### Staging
- Runs with `environment.staging.ts`
- Production-like optimizations
- Uses staging APIs for testing

### Production
- Runs with `environment.prod.ts`
- Full optimizations enabled
- Uses live APIs and payment gateways
- Logging disabled for performance
