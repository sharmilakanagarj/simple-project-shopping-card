import { createAction, props } from "@ngrx/store";
import { Iproducts } from "../Interface/products.store";

export const loadCurdProducts = createAction('[load Curd Products] Load Curd Products');
export const loadCurdProductsSuccess = createAction('[load curd Products] Load Curd Products Success',props<{products:Iproducts[]}>());
export const loadCurdProductsFailure = createAction('[load curd Products] Load Curd Products Failure',props<{error:any}>());

export const addCurdProducts = createAction('[Add curd Products] Add Curd Products',props<{products:any}>());
export const addCurdProductsSuccess = createAction('[Add curd Products] Add Curd Products Success',props<{products:any}>());
export const addCurdProductsFailure = createAction('[Add curd Products] Add Curd Products Failure',props<{error:any}>());

export const editCurdProducts = createAction('[Edit curd Products] Edit Curd Products',props<{id:number,products:any}>());
export const editCurdProductsSuccess = createAction('[Edit curd Products] Edit Curd Products Success',props<{products:any}>());
export const editCurdProductsFailure = createAction('[Edit curd Products] Edit Curd Products Failure',props<{error:any}>());

export const deleteCurdProducts = createAction('[Delete curd Products] Delete Curd Products',props<{id:number}>());
export const deleteCurdProductsSuccess = createAction('[Delete curd Products] Delete Curd Products Success',props<{id:number}>());
export const deleteCurdProductsFailure = createAction('[Delete curd Products] Delete Curd Products Failure',props<{error:any}>());


