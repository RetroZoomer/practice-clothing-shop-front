import {Component, OnInit} from '@angular/core';
import {IUser} from "../../models/user";
import {UserService} from "../../services/user.service";
import {ErrorService} from "../../services/error.service";
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {ModalService} from "../../services/modal.service";
import {TokenStorageService} from "../../auth/_services/token-storage.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit{
  currentUser: any;

  constructor(
    private userService: UserService,
    public modalService: ModalService,
    private token: TokenStorageService
  ) {
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
  }
}
