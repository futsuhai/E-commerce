import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppConfig {
    private baseUrl = 'http://localhost:5159';

    public get productsApi(): string { 
        return `${this.baseUrl}/api/products`;
    }
}