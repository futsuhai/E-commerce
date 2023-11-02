import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/components/models/product.model';

@Component({
  selector: 'app-product-card-basket',
  templateUrl: './product-card-basket.component.html',
  styleUrls: ['./product-card-basket.component.scss']
})
export class ProductCardBasketComponent {

  @Input() product: IProduct | undefined;
  public count: number = 1;

  public get fullPrice(): number {
    return this.count * (this.product?.commonPrice || 0)
  }

  public increment(): void {
    this.count++;
  }

  public decrement(): void {
    if (this.count > 0) {
      this.count--;
    }
  }
}
