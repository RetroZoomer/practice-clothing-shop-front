import {Component, Input} from '@angular/core';
import {IProduct} from "../../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() product: IProduct
  @Input() currentUser: any

  findRole(): boolean {
     return  this.currentUser.roles.find(r => r == 'ROLE_ADMIN')
  }
}
