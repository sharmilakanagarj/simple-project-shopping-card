import { Routes } from '@angular/router';
import { LoginCompoment } from './login-compoment/login-compoment';

export const routes: Routes = [
    {
        path:'', component: LoginCompoment
        
    },
   {
  path: 'products',
  loadComponent: () =>
    import('./product-compoment/product-compoment').then(c => c.ProductCompoment)
},
{
path:'signal',
loadComponent: () =>
  import('./signal-compoment/signal-compoment').then(c => c.SignalCompoment)
}

];
