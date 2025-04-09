import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      title: ['', Validators.required, Validators.minLength(3)],
      price: [0, Validators.required, Validators.min(0.1)],
      imageUrl: ['', Validators.required],
      description: ['', Validators.required, Validators.minLength(10)],
      likes: [0],
      favorite: [false],
      availableUntil: [new Date(), Validators.required],
    });
  }

  addProduct() {
    // Add product form values to product
    this.product = this.productForm.value;
    console.log('Product added:', this.product);
  }
}
