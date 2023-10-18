import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product-card-admin',
  templateUrl: './product-card-admin.component.html',
  styleUrls: ['./product-card-admin.component.scss']
})
export class ProductCardAdminComponent implements OnInit {
  @Input() product!: IProduct;
  @Input() submited$?: Subject<void>;

  public ngOnInit(): void {
    this.submited$?.subscribe(() => {
      
    });
  }

  constructor(private productService: ProductService) { }
}
