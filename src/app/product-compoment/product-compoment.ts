import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProductList } from '../../Store/Product.selector';
import { productActions } from '../../Store/Product.action';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { getCurdProductList } from '../../Store/Curd.selector';
import { addCurdProducts, addCurdProductsSuccess, deleteCurdProducts, editCurdProducts, loadCurdProducts } from '../../Store/Curd.action';
import { Iproducts } from '../../Interface/products.store';

@Component({
  selector: 'app-product-compoment',
  imports: [AsyncPipe,CommonModule],
  templateUrl: './product-compoment.html',
  styleUrl: './product-compoment.css',
})
export class ProductCompoment implements OnInit {

  private store = inject(Store);

  displayProducts$ = this.store.select(getProductList);
  curdPrducts$! : Observable<Iproducts[]>; 

  ngOnInit(): void {
    this.store.dispatch(loadCurdProducts());
    this.curdPrducts$ = this.store.select(getCurdProductList);
  }

    addProduct() {
    const newProduct: Iproducts = {
      id: 67,
      title: 'Test Product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: { rate: 3.9, count: 120 }
    };
    this.store.dispatch(addCurdProducts({ products: newProduct }));
  }

  editProduct(){
    const updatedProduct: Iproducts = {
      id: 2,
      title: 'Updated Test Product',
      price: 15.0,
      description: 'updated lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: { rate: 4.2, count: 150 }
    };
    this.store.dispatch(editCurdProducts({id:2, products: updatedProduct}));
  }

  deleteProduct(){
    this.store.dispatch(deleteCurdProducts({id:2}));

  }
}
