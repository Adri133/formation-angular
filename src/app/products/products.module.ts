import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductInputComponent } from './product-input/product-input.component';
import { RouterModule } from '@angular/router';
import { ProductsRoutingModule } from './products-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductCardComponent,
    ProductAddComponent,
    ProductInputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ProductsRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [ProductListComponent],
})
export class ProductsModule {}
