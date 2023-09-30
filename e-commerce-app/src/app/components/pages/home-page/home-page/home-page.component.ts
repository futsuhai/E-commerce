import { Component } from '@angular/core';
import { ProductListData } from 'src/app/services/product-service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  isActive = false;

  toggleButton() {
    this.isActive = !this.isActive;
  }
}
