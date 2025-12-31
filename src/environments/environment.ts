// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  appName: 'Aditya Ecom - Development',
  version: '1.0.0',
  enableLogging: true,
  paymentGateways: {
    stripe: {
      publishableKey: 'pk_test_your_stripe_test_key',
      enabled: true
    },
    razorpay: {
      keyId: 'rzp_test_your_razorpay_test_key',
      enabled: true
    },
    paypal: {
      clientId: 'your_paypal_sandbox_client_id',
      enabled: true
    }
  },
  firebase: {
    apiKey: 'your-dev-firebase-api-key',
    authDomain: 'your-project.firebaseapp.com',
    projectId: 'your-project-id',
    storageBucket: 'your-project.appspot.com',
    messagingSenderId: '123456789',
    appId: 'your-dev-app-id'
  },
  features: {
    enableAnalytics: false,
    enablePushNotifications: false,
    enableCaching: true,
    maxCartItems: 100
  }
};
