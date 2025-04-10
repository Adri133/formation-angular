import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products!: Product[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  ngOnInit(): void {
    this.productService.getProducts();
  }

  remove(id: number) {
    this.productService.deleteProduct(id);
  }
}
