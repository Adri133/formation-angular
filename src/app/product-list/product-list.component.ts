import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.refreshProducts();
  }

  refreshProducts() {
    this.products$ = this.productService.getProducts();
  }

  remove(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.refreshProducts();
    });
  }
}
