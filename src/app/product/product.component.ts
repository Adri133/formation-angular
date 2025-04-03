import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product.interface';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product!: Product;

  addToFavorites() {
    this.product.favorite = !this.product.favorite;
    this.product.likes += this.product.favorite ? 1 : -1;
  }
}
