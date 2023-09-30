import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page/home-page.component';
import { ProductPageComponent } from '../pages/product-page/product-page/product-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  { path: 'product/:productId', component: ProductPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
