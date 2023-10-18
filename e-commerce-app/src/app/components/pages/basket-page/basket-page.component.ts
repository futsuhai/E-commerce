import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/components/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent implements OnInit{
  products: IProduct[] = [];
  
  constructor(private productService: ProductService) { }

  public async ngOnInit() {
    this.products = await this.productService.getProducts()
  }
}
