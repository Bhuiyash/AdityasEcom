import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardComponent {
  @Input() product: any;
  @Input() addToCart?: (product: any) => void;
  @Input() cartCountForProduct?: number;
  @Input() removeFromCart?: (product: any) => void;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  handleAddToCart() {
    if (this.addToCart) {
      this.addToCart(this.product);
      this.animateCard('animated-add');
    }
  }

  handleRemoveFromCart() {
    if (this.removeFromCart) {
      this.removeFromCart(this.product);
      this.animateCard('animated-remove');
    }
  }

  private animateCard(className: string) {
    const card = this.el.nativeElement.querySelector('.product-card');
    if (card) {
      this.renderer.addClass(card, className);
      setTimeout(() => this.renderer.removeClass(card, className), 500);
    }
  }
}
