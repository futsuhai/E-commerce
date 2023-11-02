import { Component, EventEmitter, Output } from '@angular/core';
import { FormBaseComponent } from '../form-base/form-base.component';
import { FormBuilder } from '@angular/forms';
import { IProduct } from 'src/app/components/models/product.model';

@Component({
  selector: 'app-form-created',
  templateUrl: './form-create.component.html',
  styleUrls: ['../form-base/form-shared-styles.scss']
})
export class FormCreatedComponent extends FormBaseComponent {

  @Output() public createdProduct = new EventEmitter<IProduct>();

  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
  }

  public override async onSubmit(): Promise<void> {
    const product = this.buildProductModel();
    if (!product) {
      return;
    }

    this.createdProduct.emit(product);
    super.ngOnInit();
  }
}
