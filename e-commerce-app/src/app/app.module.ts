import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header/header.component';
import { FooterComponent } from './components/layout/footer/footer/footer.component';
import { HomePageComponent } from './components/pages/home-page/home-page/home-page.component';
import { AuthPageComponent } from './components/pages/auth-page/auth-page/auth-page.component';
import { AppRoutingModule } from './components/routing/app-routing.module';
import { ProductListComponent } from './components/layout/product-list/product-list.component';
import { ProductCardComponent } from './components/layout/product-card/product-card.component';
import { RatingComponent } from './components/layout/rating/rating.component';
import { ProductService } from './services/product-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AuthPageComponent,
    ProductListComponent,
    ProductCardComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
