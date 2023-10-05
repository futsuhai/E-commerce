import { Injectable, NgZone } from "@angular/core";
import { Product } from "../components/models/product.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppConfig } from "../app.config";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(
        private http: HttpClient,
        private config: AppConfig
    ) {

    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.config.productsApi);
    }

    getProductsStab(): Product[] {
        return ProductService.productsStab
    }

    getProductById(productId: number): Product | undefined {
        const foundProduct = ProductService.productsStab.find(p => p.id === productId);
        return foundProduct;
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
