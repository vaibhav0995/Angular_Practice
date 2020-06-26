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

  addUser(userForm: FormGroup) {
    let userData = userForm.value;
    let user = new UserModel;
    user.first_name = userData.firstName;
    user.last_name = userData.lastName;
    user.email = userData.email;
    user.isActive = (userData.isActive) ? true: false;
    this.userDataList.push(user);
    this.addUserForm.reset();

    // this._userLogService.logMyDetail(user);
    this._userLogService.addUser(user).subscribe();
    this.route.navigate(['/user-list']);
  }
}
