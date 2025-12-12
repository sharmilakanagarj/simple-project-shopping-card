import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { productReducer } from '../Store/Product.reducer';
import { provideEffects } from '@ngrx/effects';
import { ProductEffects } from '../Store/Product.effects';
import { CurdEffects } from '../Store/Curd.effects';
import { productCurdReducer } from '../Store/Curd.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(),
    provideStore({ productsState: productReducer ,CurdProductsState: productCurdReducer }),
    provideEffects([ProductEffects, CurdEffects])
  ]
};
