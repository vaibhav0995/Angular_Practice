import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserModel } from 'src/models/userModel';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;
  userDataList: UserModel[];

  constructor() { }

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
    user.last_name = userData.last_name;
    user.email = userData.email;
    user.isActive = (userData.isActive) ? true: false;
    this.userDataList.push(user);
    this.addUserForm.reset();

    console.log('User data', this.userDataList);
  }
}
