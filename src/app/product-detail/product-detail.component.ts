import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product!: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id)!;
  }

  addToFavorites() {
    this.product.favorite = !this.product.favorite;
    this.product.likes += this.product.favorite ? 1 : -1;
  }
}
