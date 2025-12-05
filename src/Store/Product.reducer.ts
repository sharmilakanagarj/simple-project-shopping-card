import { createReducer, on } from "@ngrx/store";
import { Iproducts } from "../Interface/products.store";
import { productActions, productActionsSuccess } from "./Product.action";

export interface ProductState {
    products: Iproducts[];
}
export const initalState: ProductState = {
    products: []
}

export const productReducer = createReducer(initalState, on(productActions, (state) =>
    state),
    on(productActionsSuccess, (state, { products }) => ({
        ...state, products
    })),
);