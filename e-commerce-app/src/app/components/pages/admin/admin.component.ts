import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../../models/product.model';
import { Guid } from 'guid-typescript';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  isModalOpen = false;
  public submited$ = new Subject<void>();

  newProduct: IProduct = {
    id: Guid.create().toString(),
    cardPrice: 19,
    commonPrice: 30,
    title: "Масло Элдер Титан",
    rating: 5,
    image: "assets/common/test.jpg",
    country: "Россия",
    weight: 200,
    article: 343534,
    reviews: 3,
    brand: "Элдер Титан"
  };

  constructor(private productService: ProductService) { }

  public async addProduct(): Promise<IProduct> {
    return await this.productService.addProduct(this.newProduct);
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
