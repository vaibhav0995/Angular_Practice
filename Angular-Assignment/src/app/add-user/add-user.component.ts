import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserModel } from 'src/models/userModel';
import { UserLogService } from '../services/user-log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;
  userDataList: UserModel[];
  formHasError: boolean;
  errorObj: any;

  constructor(
    private _userLogService: UserLogService,
    private route: Router
  ) { }

  ngOnInit() {
    this.userDataList = [];
    this.addUserForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      isActive: new FormControl()
    });
  }

  validateUserObj(userForm: FormGroup) {
    this.formHasError = false;
    let errorField: string;
    let errorMsg: string;
    let hint: string;
    if(userForm.controls) {
      if (userForm.controls['firstName'].errors) {
        this.formHasError = true;
        errorField = "First Name";
        errorMsg = 'First Name is required !';
        hint = "Please enter a first name."
      } else if (userForm.controls['lastName'].errors) {
        this.formHasError = true;
        errorField = "Last Name";
        errorMsg = 'Last Name is required !';
        hint = "Please enter a last name."
      } else if (userForm.controls['email'].errors) {
        this.formHasError = true;
        errorField = "Email";
        errorMsg = 'Email is required !';
        hint = "Please enter an email id."
      }
    }

    if (this.formHasError) {
      this.errorObj = {
        'error_field': errorField,
        'error_msg': errorMsg,
        'hint': hint
      }
    } else {
      this.addUser(userForm);
    }
  }

  addUser(userForm: FormGroup) {
    let userData = userForm.value;
    let user = new UserModel;
    user.first_name = userData.firstName;
    user.last_name = userData.lastName;
    user.email = userData.email;
    user.isActive = (userData.isActive) ? true : false;
    this.userDataList.push(user);
    this.addUserForm.reset();

    // this._userLogService.logMyDetail(user);
    this._userLogService.addUser(user).subscribe();
    this.route.navigate(['/user-list']);
  }

  closeErrorMsg(event) {
    this.formHasError = !event;
  }
}
