import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card';
import { PRODUCTS } from '../../assets/products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  products = PRODUCTS;
  page = 1;
  pageSize = 4;
  cart: any[] = JSON.parse(localStorage.getItem('cart') || '[]');

  get paginatedProducts() {
    const start = (this.page - 1) * this.pageSize;
    return this.products.slice(start, start + this.pageSize);
  }

  addToCart(product: any) {
    this.cart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeFromCart(product: any) {
    const index = this.cart.findIndex((item) => item.name === product.name);
    if (index !== -1) {
      this.cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  nextPage() {
    if (this.page * this.pageSize < this.products.length) {
      this.page++;
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
    }
  }

  get totalPages() {
    return Math.ceil(this.products.length / this.pageSize);
  }

  getCartCount(product: any): number {
    return this.cart.filter((item) => item.name === product.name).length;
  }
}
