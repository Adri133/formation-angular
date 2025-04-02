import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  title!: string;
  price!: number;
  imageUrl!: string;
  description!: string;

  ngOnInit() {
    this.title = 'Casque bluetooth';
    this.price = 129.99;
    this.imageUrl = 'headphone.png';
    this.description =
      'Casque sans fil avec réduction active du bruit et autonomie de 30h. Confortable et idéal pour les appels ou la musique.';
  }
}
