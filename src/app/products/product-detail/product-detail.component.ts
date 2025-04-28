import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product$!: Observable<Product>;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product$ = this.productService.getProduct(id)!;
  }

  addToFavorites() {
    this.product$.subscribe((product) => {
      product.favorite = !product.favorite;
      product.likes = (product.likes || 0) + (product.favorite ? 1 : -1);
    });
  }
}
