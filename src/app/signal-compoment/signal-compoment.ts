import { Component, signal } from '@angular/core';
import { Iproducts } from '../../Interface/products.store';

@Component({
  selector: 'app-signal-compoment',
  imports: [],
  templateUrl: './signal-compoment.html',
  styleUrl: './signal-compoment.css',
})
export class SignalCompoment {

  products = signal<Iproducts[]>([{
    id: 1,
    title: 'Signal Product',
    price: 29.99,
    description: 'This is a product managed by Angular Signal.',

    image: 'https://i.pravatar.cc',
    category: 'electronics',
    rating: { rate: 4.5, count: 100 }
  }
  ]);

  updateSignal() {
   this.products.update(product => [...product, {
      id: 2,
      title: 'New Signal Product',
      price: 39.99,
      description: 'This is another product added to the signal array.',
      image: 'https://i.pravatar.cc',
      category: 'electronics',
      rating: { rate: 4.0, count: 50 }
    }]);
  }

}
