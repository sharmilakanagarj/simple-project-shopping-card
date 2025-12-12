import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { productService } from "../Service/products.service";
import { catchError, EMPTY, exhaustMap, map, of } from "rxjs";
import { addCurdProducts, addCurdProductsFailure, addCurdProductsSuccess, deleteCurdProducts, deleteCurdProductsFailure, deleteCurdProductsSuccess, editCurdProducts, editCurdProductsFailure, editCurdProductsSuccess, loadCurdProducts, loadCurdProductsFailure, loadCurdProductsSuccess } from "./Curd.action";

@Injectable({
    providedIn: 'root'
})


export class CurdEffects {

    action$ = inject(Actions);
    store = inject(Store);
    productService = inject(productService);

       loadCurdEffects$ = createEffect(() =>{
        return this.action$.pipe(
            ofType(loadCurdProducts),
            exhaustMap(() =>
                this.productService.getProducts().pipe(
                    map(products => loadCurdProductsSuccess({ products })),
                    catchError(error => of(loadCurdProductsFailure({ error })))
                )
            )
        );  
       }
  );
 
  addCurdEffects$ = createEffect(() =>{
    return  this.action$.pipe(ofType(addCurdProducts),
    exhaustMap(action=>
      this.productService.postProducts(action.products).pipe(
        map((product)=> addCurdProductsSuccess({products:product})),
        catchError(error=> of (addCurdProductsFailure({error})))
      )
    )
    );
  }
    );

  
editCurdEffects$ = createEffect(() => { 
    return this.action$.pipe(
        ofType(editCurdProducts),
        exhaustMap((action) =>
            this.productService.editProducts(action.id, action.products).pipe(
                map((products) => editCurdProductsSuccess({ products: products })),
        catchError(error=> of (editCurdProductsFailure({error})))
            )
        )
    );
  });

deleteCurdEffects$ = createEffect(() => {
    return this.action$.pipe(
        ofType(deleteCurdProducts),
        exhaustMap((action: any) =>
            this.productService.deleteProducts(action.id).pipe(
                map(() => 
                    deleteCurdProductsSuccess({ id: action.id })
                ),
                catchError(error => of(deleteCurdProductsFailure({ error })))
            )
        )
    );
  });


}