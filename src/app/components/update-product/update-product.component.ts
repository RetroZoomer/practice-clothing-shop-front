import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../models/product";
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";
import {Subscription, throwError} from "rxjs";
import {ErrorService} from "../../services/error.service";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit{
  @Input() product: IProduct
  form: any = {};
  isSuccessful = false;
  isFailed = false;
  errorMessage = '';
  productId: number;

  constructor(
    private productService: ProductsService,
    private errorService: ErrorService,
    private modalService: ModalService) {
  }

  onSubmit(): void {
    this.productService.updateProduct(this.form).subscribe(
      data => {
        console.log(this.form)
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

  ngOnInit(): void {
    this.productId = this.modalService.productId;
    this.getProduct();
  }

  public getProduct(): void {
    this.productService.getProduct(this.productId).subscribe(product => {
        this.product = product;
        this.form = product;
      },
      (error: HttpErrorResponse) => {
        this.errorHandler.bind(this)
      })
  }
}
