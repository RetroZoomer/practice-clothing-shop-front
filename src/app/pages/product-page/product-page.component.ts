import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../models/product";
import {ProductsService} from "../../services/products.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ErrorService} from "../../services/error.service";
import {throwError} from "rxjs";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit{
  products: IProduct[] = []

  constructor(
    private productsService: ProductsService,
    private errorService: ErrorService
  ) {
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }

  ngOnInit() {
    this.getProducts();
  }

  public getProducts(): void {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    },
      (error: HttpErrorResponse) => {
        this.errorHandler.bind(this)
      })
  }



}
