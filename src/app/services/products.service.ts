import {Inject, Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {IProduct} from "../models/product";
import {ErrorService} from "./error.service";
import {environment} from "../app.component";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  private apiServerUrl = environment.apiServerUrl;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiServerUrl}/product/all`, {
      params: new HttpParams({
        fromObject: {limit: 5}
      })
    })
    //   .pipe(
    //   catchError(this.errorHandler.bind(this))
    // )
  }

  public getProduct(productId: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiServerUrl}/product/find/${productId}`)
      // .pipe(
      //   catchError(this.errorHandler.bind(this))
      // )
  }

  public addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.apiServerUrl}/product/add`, product)
      // .pipe(
      //   catchError(this.errorHandler.bind(this))
      // )
  }

  public updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.apiServerUrl}/product/update`, product)
      // .pipe(
      //   catchError(this.errorHandler.bind(this))
      // )
  }

  public deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/product/delete/${productId}`)
      // .pipe(
      //   catchError(this.errorHandler.bind(this))
      // )
  }


  // private errorHandler(error: HttpErrorResponse) {
  //   this.errorService.handle(error.message)
  //   return throwError(() => error.message)
  // }
}
