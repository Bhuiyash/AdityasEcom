import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  cartCount = 0;
  private storageListener!: () => void;

  ngOnInit() {
    // Initialize cart count
    this.updateCartCount();
    
    // Listen for storage changes (when cart is updated)
    this.storageListener = () => this.updateCartCount();
    window.addEventListener('storage', this.storageListener);
    
    // Listen for custom cart update events
    window.addEventListener('cartUpdated', this.storageListener);
  }

  ngOnDestroy() {
    window.removeEventListener('storage', this.storageListener);
    window.removeEventListener('cartUpdated', this.storageListener);
  }

  updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cartCount = cart.length;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
