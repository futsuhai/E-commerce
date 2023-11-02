import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ProductPageComponent } from '../pages/product-page/product-page.component';
import { AuthPageComponent } from '../pages/auth-page/auth-page.component';
import { BasketPageComponent } from '../pages/basket-page/basket-page.component';
import { AdminComponent } from '../pages/admin/admin.component';
import { TestingPageComponent } from '../pages/testing-page/testing-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product/:productId', component: ProductPageComponent },
  { path: 'auth', component: AuthPageComponent },
  { path: 'basket', component: BasketPageComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'test', component: TestingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
