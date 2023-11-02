import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public products: IProduct[] = [];
  public isModalOpen = false;

  constructor(
    private productService: ProductService,
  ) { }

  public async ngOnInit() {
    this.refreshProductList();
  }

  public async createProduct(product: IProduct): Promise<void> {
    await this.productService.addProduct(product);
    await this.refreshProductList();
  }

  public async deleteProduct(productId: string): Promise<void> {
    await this.productService.deleteProduct(productId);
    await this.refreshProductList();
  }

  public async updateProduct(product: IProduct): Promise<void> {
    await this.productService.updateProduct(product);
    await this.refreshProductList();
  }

  public async refreshProductList() {
    this.products = await this.productService.getProducts();
  }

  public openModal(): void {
    this.isModalOpen = true;
  }

  public closeModal(): void {
    this.isModalOpen = false;
  }

}
