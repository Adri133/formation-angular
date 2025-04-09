import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  standalone: false,
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent implements OnInit {
  product!: Product;
  productForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [0],
      title: [''],
      price: [0],
      imageUrl: [''],
      description: [''],
      likes: [0],
      favorite: [false],
      availableUntil: [new Date()],
    });
  }

  addProduct() {
    // Add product form values to product
    this.product = this.productForm.value;
    console.log('Product added:', this.product);
  }
}
