import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductCardComponent } from './product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../models/product.interface';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  const mockProduct: Product = {
    id: 1,
    title: 'T-shirt',
    price: 25,
    description: 'A nice t-shirt',
    image: 'tshirt.jpg',
    category: 'clothing',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatCardModule,
        MatButtonModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = mockProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the product title', () => {
    const title = fixture.debugElement.query(
      By.css('mat-card-title')
    ).nativeElement;
    expect(title.textContent).toContain('T-shirt');
  });
});
