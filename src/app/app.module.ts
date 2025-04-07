import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { Heart, LucideAngularModule } from 'lucide-angular';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, ProductComponent, ProductListComponent, HomeComponent, NavbarComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ Heart }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
