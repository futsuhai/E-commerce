import { Component, Input } from '@angular/core';
import { Product } from 'src/app/services/product-service';

@Component({
  selector: 'app-product-card-detail',
  templateUrl: './product-card-detail.component.html',
  styleUrls: ['./product-card-detail.component.scss']
})
export class ProductCardDetailComponent {
  @Input() product: Product | undefined;
  bonus: number = 10;
}
