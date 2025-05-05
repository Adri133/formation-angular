import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { Heart, LucideAngularModule } from 'lucide-angular';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './products/products.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        LucideAngularModule.pick({ Heart }),
        HttpClientModule,
        ProductsModule,
        CoreModule,
        SharedModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatGridListModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatMenuModule,
        MatDividerModule,
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });
  it('should be created', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
