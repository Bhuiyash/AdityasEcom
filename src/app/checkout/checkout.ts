import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
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
}
