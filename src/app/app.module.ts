import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { Heart, HeartOff, LucideAngularModule } from 'lucide-angular';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [AppComponent, ProductComponent, ProductListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ Heart, HeartOff }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
