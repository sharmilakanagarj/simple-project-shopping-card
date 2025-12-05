import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { productService } from "../Service/products.service";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { EMPTY } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class ProductEffects {

productsAction$ = inject(Actions);
productsService = inject(productService);


 productsEffects$ = createEffect(() => {
    return this.productsAction$.pipe(
        ofType('[Load Products] Load Products'),
        exhaustMap(() =>
            this.productsService.getProducts().pipe(
                map((products) => ({
                    type: '[Load Products] Load Products Success',
                    products: products
                })),
                catchError(() => EMPTY)
            )
        )
    );
  });
}