import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AuthPageComponent } from './components/pages/auth-page/auth-page.component';
import { AppRoutingModule } from './components/routing/app-routing.module';
import { ProductListComponent } from './components/layout/product-list/product-list.component';
import { ProductCardComponent } from './components/layout/product-card/product-card.component';
import { RatingComponent } from './components/layout/rating/rating.component';
import { ProductService } from './services/product.service';
import { RublesPipe } from './components/pipes/rubles.pipe';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { ProductCardDetailComponent } from './components/layout/product-card-detail/product-card-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { BasketPageComponent } from './components/pages/basket-page/basket-page.component';
import { ProductCardBasketComponent } from './components/layout/product-card-basket/product-card-basket.component';
import { GramsPipe } from './components/pipes/grams.pipe';
import { AdminComponent } from './components/pages/admin/admin.component';
import { ProductCardAdminComponent } from './components/layout/product-card-admin/product-card-admin.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormUpdateComponent } from './components/layout/forms/form-update/form-update.component';
import { TestingPageComponent } from './components/pages/testing-page/testing-page.component';
import { HeaderBaseComponent } from './components/layout/header/header-base/header-base.component';
import { HeaderDesktopComponent } from './components/layout/header/header-desktop/header-desktop.component';
import { HeaderMobileComponent } from './components/layout/header/header-mobile/header-mobile.component';
import { FormBaseComponent } from './components/layout/forms/form-base/form-base.component';
import { FormCreatedComponent } from './components/layout/forms/form-create/form-create.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomePageComponent,
    AuthPageComponent,
    ProductListComponent,
    ProductCardComponent,
    RatingComponent,
    RublesPipe,
    ProductPageComponent,
    ProductCardDetailComponent,
    BasketPageComponent,
    ProductCardBasketComponent,
    GramsPipe,
    AdminComponent,
    ProductCardAdminComponent,
    FormUpdateComponent,
    TestingPageComponent,
    HeaderBaseComponent,
    HeaderDesktopComponent,
    HeaderMobileComponent,
    FormBaseComponent,
    FormCreatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [ProductService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
