import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/components/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit{
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

 public async ngOnInit() {
    let prodId: string = this.route.snapshot.params['productId'];
    this.product = await this.productService.getProductById(prodId)
  }
}
