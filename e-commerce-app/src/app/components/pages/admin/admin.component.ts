import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  products: IProduct[] = [];
  isModalOpen = false;

  constructor(
    private productService: ProductService,
  ) { }

  public async deleteProduct(productId: string): Promise<void>{
    await this.productService.deleteProduct(productId);
    await this.refreshProductList();
  }

  public async updateProduct(product: IProduct): Promise<void>{
    await this.productService.updateProduct(product);
    await this.refreshProductList();
  }

  public async refreshProductList() {
    this.products = await this.productService.getProducts();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
