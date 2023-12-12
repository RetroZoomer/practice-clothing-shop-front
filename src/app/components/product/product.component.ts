import {Component, Input} from '@angular/core';
import {IProduct} from "../../models/product";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() product: IProduct
  @Input() currentUser: any

  constructor(public modalService: ModalService) {
  }

  findRole(): boolean {
     return  this.currentUser.roles.find(r => r == 'ROLE_ADMIN')
  }
}
