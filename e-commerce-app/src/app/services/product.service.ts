import { Injectable, NgZone } from "@angular/core";
import { IProduct } from "../components/models/product.model";
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

    public getProducts(): Promise<IProduct[]> {
        return this.get(`${this.config.productsApi}/GetProducts`);
    }

    public getProductById(productId: string): Promise<IProduct> {
        return this.get(`${this.config.productsApi}/GetProduct/${productId}`);
    }

    public addProduct(product: IProduct): Promise<IProduct> {
        return this.post(`${this.config.productsApi}/AddProduct`, product);
    }

    public deleteProduct(productId: string): Promise<IProduct> {
        return this.delete(`${this.config.productsApi}/DeleteProduct/${productId}`);
    }

    public updateProduct(product: IProduct): Promise<IProduct> {
        return this.put(`${this.config.productsApi}/UpdateProduct/${product.id}`, product);
    }
}
