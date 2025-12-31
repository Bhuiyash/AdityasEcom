import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  products = [
    {
      name: 'Wireless Headphones',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
      description: 'High quality wireless headphones with noise cancellation.'
    },
    {
      name: 'Smart Watch',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      description: 'Track your fitness and stay connected on the go.'
    },
    {
      name: 'Bluetooth Speaker',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      description: 'Portable speaker with deep bass and long battery life.'
    },
    {
      name: 'DSLR Camera',
      price: 499.99,
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      description: 'Capture stunning photos with this professional camera.'
    }
  ];
}
