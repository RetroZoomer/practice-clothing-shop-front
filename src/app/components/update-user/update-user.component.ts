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
  form = new FormGroup( {
    username: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  get username() {
    return this.form.controls.username as FormControl
  }

  get password() {
    return this.form.controls.password as FormControl
  }

  constructor(private userService: UserService,
              private modalService: ModalService) {
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value)
    this.userService.updateUser({
      username: this.form.value.username as string,
      password: this.form.value.password as string
    }).subscribe(() => {
      this.modalService.close()
    })
  }

}
