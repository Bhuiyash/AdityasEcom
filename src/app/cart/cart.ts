import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class CartComponent {
  cart: any[] = JSON.parse(localStorage.getItem('cart') || '[]');

  get total() {
    return Number(this.cart.reduce((sum, item) => sum + item.price, 0).toFixed(2));
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

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

  removeAllOfProduct(product: any) {
    this.cart = this.cart.filter(item => item.name !== product.name);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  addOne(product: any) {
    this.cart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeOne(product: any) {
    const index = this.cart.findIndex(item => item.name === product.name);
    if (index !== -1) {
      this.cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
}
