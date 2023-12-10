import {Component, Input} from '@angular/core';
import {IUser} from "../../models/user";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  @Input() user: IUser

  constructor(public modalService: ModalService) {
  }
}
