import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Product {
  id?: number;
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;

  @Output() productClicked: EventEmitter<Product> = new EventEmitter<Product>();

  onViewDetail(): void {
    this.productClicked.emit(this.product);
  }
}
