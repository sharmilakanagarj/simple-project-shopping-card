import { createReducer, on } from "@ngrx/store";
import { addCurdProductsSuccess, deleteCurdProductsSuccess, editCurdProductsSuccess, loadCurdProductsSuccess } from "./Curd.action";
import { Iproducts } from "../Interface/products.store";

export interface CurdProductsState{
    products:Iproducts[];
} 
export const  initalCurdstate :CurdProductsState={
    products:[]
}

export const productCurdReducer = createReducer(
  initalCurdstate,
  on(loadCurdProductsSuccess, (state: CurdProductsState, { products }) => ({
    ...state, products
  })),
  on(addCurdProductsSuccess, (state: CurdProductsState, { products }) => ({
    ...state, products: [...state.products, products]
  })),
  on(editCurdProductsSuccess, (state: CurdProductsState, { products }) => ({
    ...state,products:state.products.map(p=>p.id === products.id ? products :p)
  })),
  on(deleteCurdProductsSuccess, (state: CurdProductsState, { id }) => ({
    ...state,products:state.products.filter(p=>p.id !== id)
  })),
);

