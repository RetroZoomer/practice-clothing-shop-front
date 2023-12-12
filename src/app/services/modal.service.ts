import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isVisible$ = new BehaviorSubject<boolean>(false);

  isAddProduct: boolean = false;
  isUpdateProduct: boolean = false;
  isDeleteProduct: boolean = false;

  productId: number;

  constructor() { }

  addProduct(): void {
    this.isAddProduct = true;
    this.isUpdateProduct = false;
    this.isDeleteProduct = false;
  }

  updateProduct(): void {
    this.isAddProduct = false;
    this.isUpdateProduct = true;
    this.isDeleteProduct = false;
  }

  deleteProduct(): void {
    this.isAddProduct = false;
    this.isUpdateProduct = false;
    this.isDeleteProduct = true;
  }

  open(id: number, mod: string) {
    if (mod === 'add') {
      this.addProduct()
      this.isVisible$.next(true)
    }
    if (mod === 'update') {
      this.updateProduct()
      this.productId = id
      this.isVisible$.next(true)
    }
    if (mod == 'delete') {
      this.deleteProduct()
      this.productId = id
      this.isVisible$.next(true)
    }


  }

  close() {
    this.isVisible$.next(false)
  }
}
