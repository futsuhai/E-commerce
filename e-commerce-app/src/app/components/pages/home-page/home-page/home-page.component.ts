import { Component } from '@angular/core';
import { ProductListData } from 'src/app/services/product-service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  isActive = false;
  prodListsData: ProductListData[] = [
    {
      prodListTitle: 'Акции',
      prodListMore: 'Все акции'
    },
    {
      prodListTitle: 'Новинки',
      prodListMore: 'Все новинки'
    },
    {
      prodListTitle: 'Покупали раньше',
      prodListMore: 'Все покупки'
    },
  ]

  toggleButton() {
    this.isActive = !this.isActive;
  }
}
