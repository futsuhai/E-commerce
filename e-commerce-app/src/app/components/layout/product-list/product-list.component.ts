import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent {

  products: Product[] = [];
  @Input() prodListTitle: string = '';
  @Input() prodListMore: string = '';

  constructor(private productService: ProductService) {
    //this.products = this.productService.getProductsStab();
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
