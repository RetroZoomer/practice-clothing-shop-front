import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../models/product";
import {ModalService} from "../../services/modal.service";
import {ProductsService} from "../../services/products.service";
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {ErrorService} from "../../services/error.service";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent implements OnInit{
  productId: number;
  isSuccessful = false;
  isFailed = false;
  errorMessage = '';

  constructor(
    private productService: ProductsService,
    private modalService: ModalService,
    private errorService: ErrorService
  ) {
  }

  ngOnInit(): void {
    this.productId = this.modalService.productId;
  }

  onSubmit(): void {
    this.productService.deleteProduct(this.productId).subscribe(
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

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
