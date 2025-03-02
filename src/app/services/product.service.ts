import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../components/product-card/product-card.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.0,
      description: 'Description of Product 1',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20.0,
      description: 'Description of Product 2',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 30.0,
      description: 'Description of Product 3',
    },
  ];

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find((p) => p.id === id);
    return of(product);
  }
}
