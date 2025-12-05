import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./login-compoment/login-compoment').then(m => m.LoginCompoment),
        canActivate: []
    },
   {
  path: 'products',
  loadComponent: () =>
    import('./product-compoment/product-compoment').then(m => m.ProductCompoment)
}

];
