import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  standalone: false,
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent implements OnInit {
  product!: Product;

  constructor() {}

  ngOnInit(): void {
    // Initialization logic can go here
    this.product = {
      id: 0,
      title: '',
      price: 0,
      imageUrl: '',
      description: '',
      likes: 0,
      favorite: false,
      availableUntil: new Date(),
    };
  }

  addProduct() {
    // Logic to add the product
    console.log('Product added:', this.product);
  }
}
