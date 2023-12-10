import {Component, OnInit} from '@angular/core';
import {IUser} from "../../models/user";
import {UserService} from "../../services/user.service";
import {ErrorService} from "../../services/error.service";
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit{
  user: IUser;

  constructor(
    private userService: UserService,
    private errorService: ErrorService,
    public modalService: ModalService
  ) {
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }

  ngOnInit() {
    this.getUser();
  }

  public getUser(): void {
    this.userService.getUser(1).subscribe(user => {
        this.user = user;
      },
      (error: HttpErrorResponse) => {
        this.errorHandler.bind(this)
      })
  }


}
