import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page/home-page.component';
import { ProductPageComponent } from '../pages/product-page/product-page/product-page.component';
import { AuthPageComponent } from '../pages/auth-page/auth-page/auth-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product/:productId', component: ProductPageComponent },
  { path: 'auth', component: AuthPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
