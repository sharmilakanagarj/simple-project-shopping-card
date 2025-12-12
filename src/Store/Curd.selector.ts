import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CurdProductsState } from "./Curd.reducer";

export const curdSelectorState = createFeatureSelector<CurdProductsState>('CurdProductsState');

export const getCurdProductList = createSelector(
    curdSelectorState,
    (state: CurdProductsState) => state.products
)