import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardBasketComponent } from './product-card-basket.component';

describe('ProductCardBasketComponent', () => {
  let component: ProductCardBasketComponent;
  let fixture: ComponentFixture<ProductCardBasketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardBasketComponent]
    });
    fixture = TestBed.createComponent(ProductCardBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
