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

postProducts(products:Iproducts): Observable<Iproducts[]>{
    return this.httpClient.post<Iproducts[]>(this.products_api_url, products);
}

editProducts(id:number,products:Iproducts):Observable<Iproducts[]>{
    return this.httpClient.put<Iproducts[]>('$this.products_api_url}/${id}', products);
}

deleteProducts(id:number):Observable<{}>{
    return this.httpClient.delete<{}>('${this.products_api_url}/ ${id}');        
}

}