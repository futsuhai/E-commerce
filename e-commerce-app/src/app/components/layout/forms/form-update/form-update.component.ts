import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IProduct } from '../../../models/product.model';
import { FormBaseComponent } from '../form-base/form-base.component';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['../form-base/form-shared-styles.scss']
})
export class FormUpdateComponent extends FormBaseComponent {

  @Output() public updatedProduct = new EventEmitter<IProduct>();
  @Output() public close = new EventEmitter<void>();

  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
  }

  public override async onSubmit(): Promise<void> {
    const product = this.buildProductModel();
    if (!product) {
      return;
    }
    this.updatedProduct.emit(product);
    this.close.emit();
  }
}
