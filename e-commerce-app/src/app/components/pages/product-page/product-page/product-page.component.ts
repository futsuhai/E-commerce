import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/components/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    let prodId: number = parseInt(this.route.snapshot.params['productId']);
    this.productService.getProduct(prodId)
      .then(data => {
        this.product = data
      })
      .catch(error => {
        console.error('Произошла ошибка при загрузке продукта:', error);
      });
  }
}
