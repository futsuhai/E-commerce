import { Component, Input } from '@angular/core';
import { Product } from 'src/app/components/models/product.model';

@Component({
  selector: 'app-product-card-basket',
  templateUrl: './product-card-basket.component.html',
  styleUrls: ['./product-card-basket.component.scss']
})
export class ProductCardBasketComponent {
  @Input() product: Product | undefined;
  count: number = 1;

  get fullPrice(): number {
    return this.count * (this.product?.commonPrice || 0)
  }

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }
}
