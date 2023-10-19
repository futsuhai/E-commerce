import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductStateService {
  private refreshProductListSource = new Subject<void>();
  //на него подписка
  refreshProductList$ = this.refreshProductListSource.asObservable();

  refreshProductList() {
    this.refreshProductListSource.next();
  }
}
