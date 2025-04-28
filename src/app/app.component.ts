import { Component, OnInit } from '@angular/core';
import { Product } from './products/models/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'shop';
}
