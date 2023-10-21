import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  isAdminPage: boolean = false;
  @Input() products!: IProduct[];
  @Output() public updatedProduct = new EventEmitter<IProduct>();
  @Output() public deletedProduct = new EventEmitter<string>();
  
  constructor(
    private route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    const currentRoute = this.route.snapshot.url.join('/');
    if (currentRoute == 'admin') {
      this.isAdminPage = true;
    }
  }
  
  public deleteProduct(productId: string): void{
    this.deletedProduct.emit(productId);
  }
  
  public updateProduct(product: IProduct): void{
    this.updatedProduct.emit(product);
  }
}

