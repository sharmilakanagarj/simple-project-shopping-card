import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProductList } from '../../Store/Product.selector';
import { productActions } from '../../Store/Product.action';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-compoment',
  imports: [AsyncPipe,CommonModule],
  templateUrl: './product-compoment.html',
  styleUrl: './product-compoment.css',
})
export class ProductCompoment implements OnInit {

  private store = inject(Store);

  displayProducts$ = this.store.select(getProductList);


  ngOnInit(): void {
    this.store.dispatch(productActions());
  }
}
