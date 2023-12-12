import {Inject, Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
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
    private http: HttpClient
  ) {
  }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiServerUrl}/product/all`)
  }

  public getProduct(productId: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiServerUrl}/product/find/${productId}`)
  }

  public addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.apiServerUrl}/product/add`, product)
  }

  public updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.apiServerUrl}/product/update`, product)
  }

  public deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/product/delete/${productId}`)
  }
}
