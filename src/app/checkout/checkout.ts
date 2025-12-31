import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutFormComponent, CheckoutFormData } from './checkout-form/checkout-form';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, CheckoutFormComponent],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class CheckoutComponent {
  cart: any[] = JSON.parse(localStorage.getItem('cart') || '[]');

  uniqueCartItems() {
    const map = new Map();
    for (const item of this.cart) {
      if (map.has(item.name)) {
        map.get(item.name).count++;
      } else {
        map.set(item.name, { product: item, count: 1 });
      }
    }
    return Array.from(map.values());
  }

  get total() {
    return Number(this.cart.reduce((sum, item) => sum + item.price, 0).toFixed(2));
  }

  onFormSubmit(formData: CheckoutFormData) {
    console.log('Order placed with data:', formData);
    console.log('Cart items:', this.uniqueCartItems());
    console.log('Total amount:', this.total);
    
    // Here you would typically:
    // 1. Send order data to your backend API
    // 2. Process payment
    // 3. Clear cart
    // 4. Navigate to success page
    
    // For now, just show an alert
    alert(`Order placed successfully!\nName: ${formData.name}\nEmail: ${formData.email}\nTotal: $${this.total}`);
    
    // Clear cart after successful order
    localStorage.removeItem('cart');
    this.cart = [];
  }
}
