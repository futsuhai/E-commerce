import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-card-admin',
  templateUrl: './product-card-admin.component.html',
  styleUrls: ['./product-card-admin.component.scss']
})
export class ProductCardAdminComponent {

  @Input() product!: IProduct;
  public isModalOpen = false;
  @Output() public deletedProduct = new EventEmitter<string>();
  @Output() public updatedProduct = new EventEmitter<IProduct>();

  constructor() { }

  public deleteProduct(): void {
    this.deletedProduct.emit(this.product.id);
  }

  public updateProduct(product: IProduct): void {
    this.updatedProduct.emit(product);
  }
  public openModal(): void {
    this.isModalOpen = true;
  }

  public closeModal(): void {
    this.isModalOpen = false;
  }
}
