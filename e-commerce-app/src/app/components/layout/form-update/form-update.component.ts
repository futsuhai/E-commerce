import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.scss']
})
export class FormUpdateComponent implements OnInit{
  @Input() product!: IProduct ;
  @Output() onClose = new EventEmitter<void>();
  @Output() public updatedProductList = new EventEmitter<void>();
  selectedFile: File | null = null;
  selectedFileUrl: string | null = null;
  productForm!: FormGroup;

  constructor(private productService: ProductService, private formBuilder: FormBuilder) 
  {

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
    }
  }

  public async onSubmit(): Promise<void> {
    if (this.productForm.valid) {
      const formValue = this.productForm.value;
        const updatedProduct: IProduct = {
          id: this.product.id,
          cardPrice: formValue.cardPrice,
          commonPrice: formValue.commonPrice,
          title: formValue.title,
          rating: this.product.rating,
          image: this.product.image,
          country: formValue.country,
          weight: formValue.weight,
          article: formValue.article,
          reviews: this.product.reviews,
          brand: formValue.brand
        };
        this.productForm.reset();
        this.updatedProductList.emit();
        this.onClose.emit();
        await this.productService.updateProduct(updatedProduct);
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