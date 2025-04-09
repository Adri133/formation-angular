import { Component } from '@angular/core';
import { Product } from '../models/product.interface';

@Component({
  selector: 'app-product-input',
  standalone: false,
  templateUrl: './product-input.component.html',
  styleUrl: './product-input.component.css',
})
export class ProductInputComponent {
  product!: Product;

  addProduct(title: string, price: string, imageUrl: string): void {
    this.product = {
      id: 0,
      title,
      price: +price, // conversion en number
      imageUrl,
      description: '',
      likes: 0,
      favorite: false,
      availableUntil: new Date(),
    };
  }
}
