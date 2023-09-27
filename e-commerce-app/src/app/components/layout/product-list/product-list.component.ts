import { Component, Input } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = [];
  constructor(private productService: ProductService){
    this.products = this.productService.getProduct();
  }
}
