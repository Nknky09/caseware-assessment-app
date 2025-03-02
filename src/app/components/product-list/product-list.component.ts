import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {
  Product,
  ProductCardComponent,
} from '../product-card/product-card.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports: [ProductCardComponent, CommonModule],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onProductSelected(product: Product): void {
    this.router.navigate(['/products', product.id]);
  }
}
