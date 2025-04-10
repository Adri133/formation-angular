import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenWordsValidator } from '../validators/custom-validators';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-add',
  standalone: false,
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent implements OnInit {
  product!: Product;
  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          forbiddenWordsValidator(['gratuit', 'cadeau', 'offert']),
        ],
      ],
      price: [0, [Validators.required, Validators.min(0.1)]],
      imageUrl: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      availableUntil: [new Date(), [Validators.required]],
    });
  }

  addProduct() {
    // Add product form values to product
    if (this.productForm.valid) {
      this.product = this.productForm.value;
      this.productService.addProduct(this.product);
    }
  }
}
