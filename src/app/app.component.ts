import { Component, OnInit } from '@angular/core';
import { Product } from './model/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'shop';
  product!: Product;
  ngOnInit(): void {
    this.product = {
      id: 1,
      title: 'Casque bluetooth',
      price: 129.99,
      imageUrl: 'headphone.png',
      description:
        'Casque sans fil avec réduction active du bruit et autonomie de 30h. Confortable et idéal pour les appels ou la musique.',
    };
  }
}
