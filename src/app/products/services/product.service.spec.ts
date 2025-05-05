import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Product } from '../models/product.interface';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return product list from getProducts()', () => {
    const mockProducts: Product[] = [
      {
        id: 1,
        title: 'T-shirt',
        price: 25,
        image: 'tshirt.jpg',
        description: 'A nice t-shirt',
        category: 'clothing',
      },
      {
        id: 2,
        title: 'Casquette',
        price: 15,
        image: 'cap.jpg',
        description: 'A cool cap',
        category: 'accessories',
      },
    ];

    service.getProducts().subscribe((products) => {
      expect(products.length).toBe(2);
      expect(products).toEqual(mockProducts);
    });

    const req = httpMock.expectOne('https://fakestoreapi.com/products');
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });

  it('should return true if product is in stock', () => {
    const product: Product = {
      id: 1,
      title: 'T-shirt',
      price: 25,
      image: 'tshirt.jpg',
      description: 'A nice t-shirt',
      category: 'clothing',
      qty: 1,
    };
    expect(service.isInStock(product)).toBe(true);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
