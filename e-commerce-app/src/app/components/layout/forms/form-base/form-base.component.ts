import { Directive, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { IProduct } from 'src/app/components/models/product.model';

@Directive({
  selector: '[appFormBase]'
})
export class FormBaseComponent implements OnInit {

  @Input() product!: IProduct;
  protected productForm!: FormGroup;
  protected selectedFile: File | null = null;
  protected selectedFileUrl: string | null = null;
  protected id: string = "";

  constructor(protected formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    if (this.product) {
      this.productForm = this.formBuilder.group({
        title: [this.product.title, Validators.required],
        country: [this.product.country, Validators.required],
        brand: [this.product.brand, Validators.required],
        article: [this.product.article, Validators.min(0)],
        weight: [this.product.weight, Validators.min(0)],
        commonPrice: [this.product.commonPrice, Validators.min(0)],
        cardPrice: [this.product.cardPrice, Validators.min(0)],
      });
      this.id = this.product.id;
    } else {
      this.productForm = this.formBuilder.group({
        title: [null, Validators.required],
        country: [null, Validators.required],
        brand: [null, Validators.required],
        article: [null, Validators.min(0)],
        weight: [null, Validators.min(0)],
        commonPrice: [null, Validators.min(0)],
        cardPrice: [null, Validators.min(0)],
      });
      this.id = Guid.create().toString();
    }
  }

  public async onSubmit(): Promise<void> {
    this.productForm.reset();
  }

  public buildProductModel(): IProduct | null {
    if (!this.productForm.valid) {
      return null;
    }
    const formValue = this.productForm.value;
    return {
      id: this.id,
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
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (!inputElement.files) {
      return;
    }
    this.selectedFile = inputElement.files[0];
    this.selectedFileUrl = URL.createObjectURL(this.selectedFile);
  }
}


