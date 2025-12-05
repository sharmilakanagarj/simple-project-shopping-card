import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCompoment } from './product-compoment';

describe('ProductCompoment', () => {
  let component: ProductCompoment;
  let fixture: ComponentFixture<ProductCompoment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCompoment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCompoment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
