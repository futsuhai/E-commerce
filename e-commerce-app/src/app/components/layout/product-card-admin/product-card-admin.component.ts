import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-card-admin',
  templateUrl: './product-card-admin.component.html',
  styleUrls: ['./product-card-admin.component.scss']
})
export class ProductCardAdminComponent {
  @Input() product!: IProduct;

  @Output() public deletedProduct = new EventEmitter<string>();

  public deleteProduct(): void {
    this.deletedProduct.emit(this.product.id);
  }
}
