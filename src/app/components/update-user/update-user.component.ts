import {Component, OnInit} from '@angular/core';
import {IUser} from "../../models/user";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit{
  form: any = {};
  isSuccessful = false;
  isFailed = false;
  errorMessage = '';

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.updateUser(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
      );
  }

}
