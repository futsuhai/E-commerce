import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ProductStateService } from 'src/app/services/product-state.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  @Input() submited$?: Subject<void>;
  products: IProduct[] = [];
  isAdminPage: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private productStateService: ProductStateService
  ) { }

  public async ngOnInit() {
    this.products = await this.productService.getProducts()
    const currentRoute = this.route.snapshot.url.join('/');
    if (currentRoute == 'admin') {
      this.isAdminPage = true;
    }
    this.productStateService.refreshProductList$.subscribe(() => {
      this.refreshProductList();
    });
  }

  public async refreshProductList() {
    this.products = await this.productService.getProducts();
  }
}
