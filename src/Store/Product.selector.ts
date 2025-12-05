import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./Product.reducer";
import { create } from "domain";

export const productSelectorState = createFeatureSelector<ProductState>('productsState');

export const getProductList = createSelector(
    productSelectorState,
    (state: ProductState) => state.products
)