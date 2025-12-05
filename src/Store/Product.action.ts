import { createAction, props } from "@ngrx/store";
import { Iproducts } from "../Interface/products.store";

export const productActions = createAction('[Load Products] Load Products');
export const productActionsSuccess = createAction('[Load Products] Load Products Success', props<{ products: Iproducts[] }>());

