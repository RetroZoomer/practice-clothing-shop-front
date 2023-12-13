import {Component, Input} from '@angular/core';
import {IProduct} from "../../models/product";
import {ModalService} from "../../services/modal.service";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-random-products',
  templateUrl: './random-products.component.html',
  styleUrl: './random-products.component.css'
})
export class RandomProductsComponent {
  @Input() product: IProduct
  @Input() currentUser: any

  constructor(public modalService: ModalService) {
  }

  findRole(): boolean {
    return  this.currentUser.roles.find(r => r == 'ROLE_ADMIN')
  }
}
