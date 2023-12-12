import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../models/product";
import {ProductsService} from "../../services/products.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Subscription, throwError} from "rxjs";
import {ErrorService} from "../../services/error.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-about-product-page',
  templateUrl: './about-product-page.component.html',
  styleUrl: './about-product-page.component.css'
})
export class AboutProductPageComponent implements OnInit{
  product: IProduct;
  productId: number;
  private sub: Subscription;

  constructor(
    private productService:ProductsService,
    private errorService: ErrorService,
    private rout: ActivatedRoute
  ) {
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }

  ngOnInit(): void {
    this.sub = this.rout.params.subscribe(param => {
      this.productId = param['id']
    });
    this.getProduct();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public getProduct(): void {
    this.productService.getProduct(this.productId).subscribe(product => {
        this.product = product;
      },
      (error: HttpErrorResponse) => {
        this.errorHandler.bind(this)
      })
  }

}
