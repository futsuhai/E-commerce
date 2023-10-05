import { Component } from '@angular/core';
import { Product } from 'src/app/components/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent {
  products: Product[] = [];
  
  constructor(private productService: ProductService) {
    this.products = this.productService.getProductsStab();
  }
}
