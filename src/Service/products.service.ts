import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Iproducts } from "../Interface/products.store";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})


export class productService {

    private httpClient = inject(HttpClient);

private products_api_url  = 'https://fakestoreapi.com/products';

getProducts() : Observable<Iproducts[]>{
    return this.httpClient.get<Iproducts[]>(this.products_api_url);
}

}