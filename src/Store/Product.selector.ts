import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./Product.reducer";


export const productSelectorState = createFeatureSelector<ProductState>('productsState');

export const getProductList = createSelector(
    productSelectorState,
    (state: ProductState) => state.products
)