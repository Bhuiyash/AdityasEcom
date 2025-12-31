import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  
  constructor() { }

  get isProduction(): boolean {
    return environment.production;
  }

  get apiUrl(): string {
    return environment.apiUrl;
  }

  get appName(): string {
    return environment.appName;
  }

  get version(): string {
    return environment.version;
  }

  get enableLogging(): boolean {
    return environment.enableLogging;
  }

  get paymentGateways() {
    return environment.paymentGateways;
  }

  get firebase() {
    return environment.firebase;
  }

  get features() {
    return environment.features;
  }

  // Helper methods for specific payment gateways
  getStripeKey(): string {
    return environment.paymentGateways.stripe.publishableKey;
  }

  getRazorpayKey(): string {
    return environment.paymentGateways.razorpay.keyId;
  }

  getPaypalClientId(): string {
    return environment.paymentGateways.paypal.clientId;
  }

  isPaymentGatewayEnabled(gateway: 'stripe' | 'razorpay' | 'paypal'): boolean {
    return environment.paymentGateways[gateway].enabled;
  }

  // Logger method that respects environment settings
  log(message: any, ...args: any[]): void {
    if (this.enableLogging) {
      console.log(`[${this.appName}]`, message, ...args);
    }
  }

  // Error logger that always logs in development
  error(message: any, ...args: any[]): void {
    if (!this.isProduction || this.enableLogging) {
      console.error(`[${this.appName}]`, message, ...args);
    }
  }
}
