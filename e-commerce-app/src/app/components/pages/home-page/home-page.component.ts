import { Component, OnInit } from '@angular/core';
import { MapData } from 'src/app/components/models/map.model';
import { IProduct } from 'src/app/components/models/product.model';
import { MapService } from 'src/app/services/map.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public products: IProduct[] = [];
  public maps: MapData[] = [];
  public selectedMapIndex: number = 0;

  constructor(
    private productService: ProductService,
    private mapService: MapService
  ) {
    this.maps = mapService.getMapData();
  }

  public async ngOnInit() {
    this.products = await this.productService.getProducts();
  }

  public selectMap(index: number) {
    this.selectedMapIndex = index;
  }
}
