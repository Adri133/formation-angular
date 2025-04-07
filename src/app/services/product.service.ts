import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  public getProducts(): Product[] {
    return [
      {
        id: 1,
        title: 'Casque bluetooth',
        price: 129.99,
        imageUrl: 'headphone.png',
        description:
          'Casque sans fil avec réduction active du bruit et autonomie de 30h. Confortable et idéal pour les appels ou la musique.',
        likes: 201,
        favorite: true,
        availableUntil: new Date('2023-12-31'),
      },
      {
        id: 2,
        title: 'Enceite portable',
        price: 89.9,
        imageUrl: 'enceinte.png',
        description:
          'Enceinte Bluetooth portable avec une autonomie de 20 heures. Son puissant et design élégant.',
        likes: 100,
        favorite: false,
        availableUntil: new Date('2023-12-31'),
      },
      {
        id: 3,
        title: 'Souris ergonomique',
        price: 45.5,
        imageUrl: 'souris.png',
        description:
          'Souris ergonomique sans fil avec plusieurs boutons programmables. Idéale pour le gaming ou le travail.',
        likes: 48,
        favorite: true,
        availableUntil: new Date('2023-12-31'),
      },
    ];
  }

  public getProductById(id: number): Product | undefined {
    return this.getProducts().find((product) => product.id === id);
  }
}
