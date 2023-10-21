import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-card-admin',
  templateUrl: './product-card-admin.component.html',
  styleUrls: ['./product-card-admin.component.scss']
})
export class ProductCardAdminComponent {
  @Input() product!: IProduct;
  isModalOpen = false;
  @Output() public deletedProduct = new EventEmitter<string>();
  @Output() public updatedProductList = new EventEmitter<void>();

  public deleteProduct(): void {
    this.deletedProduct.emit(this.product.id);
  }

  constructor() { }

  public updateProduct(): void {
    console.log("ZXC");
    this.updatedProductList.emit();
  }
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
