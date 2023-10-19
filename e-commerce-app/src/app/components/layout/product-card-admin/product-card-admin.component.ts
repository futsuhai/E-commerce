import { Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Subject } from 'rxjs';
import { ProductStateService } from 'src/app/services/product-state.service';

@Component({
  selector: 'app-product-card-admin',
  templateUrl: './product-card-admin.component.html',
  styleUrls: ['./product-card-admin.component.scss']
})
export class ProductCardAdminComponent implements OnInit {
  @Input() product!: IProduct;
  @Input() submited$?: Subject<void>;
  @Input() callRefresh = new EventEmitter<void>();

  constructor(
    private productService: ProductService,
    private productStateService: ProductStateService
  ) { }

  public ngOnInit(): void {
    this.submited$?.subscribe(() => {
      //for update 
    });
  }

  public async deleteProduct(): Promise<IProduct> {
    const deletedProduct = await this.productService.deleteProduct(this.product.id);
    this.productStateService.refreshProductList();
    return deletedProduct;
  }
}
