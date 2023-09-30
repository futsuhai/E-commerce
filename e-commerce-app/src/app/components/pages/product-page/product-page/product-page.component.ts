import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from 'src/app/services/product-service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  product: Product | undefined; 

  constructor(route: ActivatedRoute, productService: ProductService) {
    let prodId: number = parseInt(route.snapshot.params['productId']);
    this.product = productService.getProductById(prodId);
    if (!this.product) {
      return;
    }
  }
}
