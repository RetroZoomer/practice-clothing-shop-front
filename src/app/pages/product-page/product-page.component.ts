import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../models/product";
import {ProductsService} from "../../services/products.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ErrorService} from "../../services/error.service";
import {throwError} from "rxjs";
import {ModalService} from "../../services/modal.service";
import {TokenStorageService} from "../../auth/_services/token-storage.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit{
  products: IProduct[] = [];
  threeProducts: IProduct[] =[]
  product: IProduct;
  line: string = '';
  type: string = '';
  currentUser: any;
  @Input() productId: number;

  constructor(
    private productsService: ProductsService,
    private errorService: ErrorService,
    public modalService: ModalService,
    private token: TokenStorageService
  ) {
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }

  ngOnInit() {
    this.getProducts();
    this.getRandomProducts();
    this.currentUser = this.token.getUser()
  }

  public getProducts(): void {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    },
      (error: HttpErrorResponse) => {
        this.errorHandler.bind(this)
      })
  }

  public getRandomProducts(): void {
    this.productsService.getRandom().subscribe(products => {
        this.threeProducts = products;
        console.log(this.threeProducts)
      },
      (error: HttpErrorResponse) => {
        this.errorHandler.bind(this)
      })
  }

  findRole(): boolean {
    return  this.currentUser.roles.find(r => r == 'ROLE_ADMIN')
  }

}
