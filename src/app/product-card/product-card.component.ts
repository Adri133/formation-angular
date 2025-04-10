import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  addToFavorites() {
    this.product.favorite = !this.product.favorite;
    this.product.likes += this.product.favorite ? 1 : -1;
  }

  onDelete() {
    this.delete.emit(this.product.id);
  }
}
