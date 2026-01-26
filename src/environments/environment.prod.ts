export const environment = {
  production: true,
  apiUrl: 'https://api.adityaecom.com/api',
  appName: 'Aditya Ecom',
  version: '1.0.0',
  enableLogging: false,
  paymentGateways: {
    stripe: {
      publishableKey: 'pk_live_your_stripe_live_key',
      enabled: true
    },
    razorpay: {
      keyId: 'rzp_live_your_razorpay_live_key',
      enabled: true
    },
    paypal: {
      clientId: 'your_paypal_production_client_id',
      enabled: true
    }
  },
  firebase: {
    apiKey: 'your-prod-firebase-api-key',
    authDomain: 'your-project-prod.firebaseapp.com',
    projectId: 'your-project-prod',
    storageBucket: 'your-project-prod.appspot.com',
    messagingSenderId: '987654321',
    appId: 'your-prod-app-id'
  },
  features: {
    enableAnalytics: true,
    enablePushNotifications: true,
    enableCaching: true,
    maxCartItems: 50
  }
};
