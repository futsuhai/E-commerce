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
  @Output() public refreshedProductList = new EventEmitter<void>();
  @Output() public deletedProduct = new EventEmitter<string>();

  constructor(
    private route: ActivatedRoute,
  ) { }

  public async ngOnInit() {
    this.refreshProductList();
    const currentRoute = this.route.snapshot.url.join('/');
    if (currentRoute == 'admin') {
      this.isAdminPage = true;
    }
  }

  public deleteProduct(): void{
    this.deletedProduct.emit();
  }

  public updateProduct(): void{
    this.updatedProduct.emit();
  }

  public refreshProductList(): void{
    this.refreshedProductList.emit();
  }
}
