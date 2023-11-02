import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-card-detail',
  templateUrl: './product-card-detail.component.html',
  styleUrls: ['./product-card-detail.component.scss']
})
export class ProductCardDetailComponent {

  @Input() product: IProduct | undefined;
  public bonusStab: number = 10;
}
