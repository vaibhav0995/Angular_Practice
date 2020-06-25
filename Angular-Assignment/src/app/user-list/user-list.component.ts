import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/models/userModel';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public userDataList: UserModel[];
  public showDetailsDiv: boolean;
  public selectedUser: UserModel;

  constructor() { }

  ngOnInit() {
    this.initializeUserListData();
  }

  initializeUserListData(): void {
    this.userDataList = [];
    for (let i = 1; i <= 5; i++) {
      let userModelObj = new UserModel();
      userModelObj.first_name = "User-" + i;
      userModelObj.last_name = "last-name-" + i;
      userModelObj.email = userModelObj.first_name + "@" + 'domain.com';
      userModelObj.isActive = true;
      this.userDataList.push(userModelObj);
    }
  }

  showDetails(user: UserModel) {
    this.selectedUser = user;
    this.showDetailsDiv = true;
  }

}
