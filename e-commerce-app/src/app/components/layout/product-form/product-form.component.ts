import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../../models/product.model';
import { Guid } from 'guid-typescript';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  @Input() submited$?: Subject<void>;
  @Input() productToEdit?: IProduct;
  @Output() onClose = new EventEmitter<void>();
  selectedFile: File | null = null;
  selectedFileUrl: string | null = null;
  productForm: FormGroup;

  constructor(private productService: ProductService, private formBuilder: FormBuilder) {
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

  public ngOnInit(): void {
    if (this.productToEdit) {
      this.productForm.setValue({
        title: this.productToEdit.title,
        country: this.productToEdit.country,
        brand: this.productToEdit.brand,
        article: this.productToEdit.article,
        weight: this.productToEdit.weight,
        commonPrice: this.productToEdit.commonPrice,
        cardPrice: this.productToEdit.cardPrice,
      });
    }
  }

  public async onSubmit(): Promise<IProduct | null> {
    if (this.productForm.valid) {
      const formValue = this.productForm.value;
      if (this.productToEdit) {
        const updatedProduct: IProduct = {
          id: this.productToEdit.id,
          cardPrice: formValue.cardPrice,
          commonPrice: formValue.commonPrice,
          title: formValue.title,
          rating: this.productToEdit.rating,
          image: this.productToEdit.image,
          country: formValue.country,
          weight: formValue.weight,
          article: formValue.article,
          reviews: this.productToEdit.reviews,
          brand: formValue.brand
        };
        this.productForm.reset();
        this.onClose.emit();
        this.submited$?.next();
        return await this.productService.updateProduct(updatedProduct);
      } else {
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
        this.submited$?.next();
        return await this.productService.addProduct(product);
      }
    }
    this.onClose.emit();
    this.submited$?.next();
    return null;
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
