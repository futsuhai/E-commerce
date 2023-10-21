import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.scss']
})
export class FormCreateComponent {
  @Output() onClose = new EventEmitter<void>();
  @Output() public createdProduct = new EventEmitter<IProduct>();
  selectedFile: File | null = null;
  selectedFileUrl: string | null = null;
  productForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) 
  {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      country: ['', Validators.required],
      brand: ['', Validators.required],
      article: [0, Validators.min(0)],
      weight: [0, Validators.min(0)],
      commonPrice: [0, Validators.min(0)],
      cardPrice: [0, Validators.min(0)],
    });
  }

  public async onSubmit(): Promise<void> {
    if (this.productForm.valid) {
      const formValue = this.productForm.value;
        const product: IProduct = {
          id: Guid.create().toString(),
          cardPrice: formValue.cardPrice,
          commonPrice: formValue.commonPrice,
          title: formValue.title,
          rating: 5,
          image: "assets/common/test.jpg",
          country: formValue.country,
          weight: formValue.weight,
          article: formValue.article,
          reviews: 3,
          brand: formValue.brand
        };
        this.productForm.reset();
        this.onClose.emit();
        this.createdProduct.emit(product);
      }
    this.onClose.emit();
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
      this.selectedFileUrl = URL.createObjectURL(this.selectedFile);
    } else {
      this.selectedFile = null;
      this.selectedFileUrl = null;
    }
  }
}
