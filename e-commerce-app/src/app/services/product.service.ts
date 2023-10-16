import { Injectable, NgZone } from "@angular/core";
import { Product } from "../components/models/product.model";
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "../app.config";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: 'root'
})
export class ProductService extends BaseService {

    constructor(
        http: HttpClient,
        zone: NgZone,
        protected config: AppConfig
    ) { super(http, zone) }

    getProducts(): Promise<Product[]> {
        return this.get(`${this.config.productsApi}/GetProducts`);
    }

    getProduct(productId: number): Promise<Product> {
        return this.get(`${this.config.productsApi}/${productId}`);
    }

    getProductById(productId: number): Promise<Product>{
        return this.get(this.config.productsApi);
    }

    getProductsStab(): Product[] {
        return ProductService.productsStab
    }

    private static productsStab: Product[] = [
        {
            id: 0,
            cardPrice: 44.50,
            commonPrice: 50.50,
            title: 'Г/Ц Блинчики с мясом',
            rating: 3,
            image: "assets/common/test.jpg",
            country: 'Россия',
            weight: 180,
            article: 371431,
            reviews: 3,
            brand: "Мясное хозяйство"
        },
        {
            id: 1,
            cardPrice: 44.50,
            commonPrice: 50.50,
            title: 'Г/Ц Блинчики с мясом',
            rating: 3,
            image: "assets/common/product-card.jpg",
            country: 'Россия',
            weight: 180,
            article: 371431,
            reviews: 3,
            brand: "Мясное хозяйство"
        },
        {
            id: 2,
            cardPrice: 44.50,
            commonPrice: 50.50,
            title: 'Г/Ц Блинчики с мясом',
            rating: 3,
            image: "assets/common/product-card.jpg",
            country: 'Россия',
            weight: 180,
            article: 371431,
            reviews: 3,
            brand: "Мясное хозяйство"
        },
        {
            id: 3,
            cardPrice: 44.50,
            commonPrice: 50.50,
            title: 'Г/Ц Блинчики с мясом',
            rating: 3,
            image: "assets/common/product-card.jpg",
            country: 'Россия',
            weight: 180,
            article: 371431,
            reviews: 3,
            brand: "Мясное хозяйство"
        },
    ]
}
