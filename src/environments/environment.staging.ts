export const environment = {
  production: false,
  apiUrl: 'https://staging-api.adityaecom.com/api',
  appName: 'Aditya Ecom - Staging',
  version: '1.0.0',
  enableLogging: true,
  paymentGateways: {
    stripe: {
      publishableKey: 'pk_test_your_stripe_staging_key',
      enabled: true
    },
    razorpay: {
      keyId: 'rzp_test_your_razorpay_staging_key',
      enabled: true
    },
    paypal: {
      clientId: 'your_paypal_staging_client_id',
      enabled: true
    }
  },
  firebase: {
    apiKey: 'your-staging-firebase-api-key',
    authDomain: 'your-project-staging.firebaseapp.com',
    projectId: 'your-project-staging',
    storageBucket: 'your-project-staging.appspot.com',
    messagingSenderId: '555666777',
    appId: 'your-staging-app-id'
  },
  features: {
    enableAnalytics: true,
    enablePushNotifications: false,
    enableCaching: true,
    maxCartItems: 75
  }
};
