import { Injectable } from "@angular/core";
import { products } from "src/app/product";

@Injectable()
export class ProductService {
    getProducts() {
        return products
    }

    getProductById(productId: number) {
        return products[productId]
    }
}