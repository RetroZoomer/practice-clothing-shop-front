import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{
  form: any = {};
  isSuccessful = false;
  isFailed = false;
  errorMessage = '';

  constructor(
    private productService: ProductsService,
    private modalService: ModalService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.productService.addProduct(this.form).subscribe(
      data => {
        this.isFailed = false;
        this.isSuccessful = true;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
