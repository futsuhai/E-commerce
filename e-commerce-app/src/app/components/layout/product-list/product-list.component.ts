import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  @Input() submited$?: Subject<void>;
  products: IProduct[] = [];
  isAdminPage: boolean = false;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  public async ngOnInit() {
    this.products = await this.productService.getProducts()
    const currentRoute = this.route.snapshot.url.join('/');
    if (currentRoute == 'admin') {
      this.isAdminPage = true;
    }
  }
}
