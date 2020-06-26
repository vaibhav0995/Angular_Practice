import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/models/userModel';
import { UserLogService } from '../services/user-log.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public userDataList: UserModel[];
  public showDetailsDiv: boolean;
  public selectedUser: UserModel;

  constructor(
    private _userLogService: UserLogService
  ) { }

  ngOnInit() {
    this.initializeUserListData();
  }

  initializeUserListData(): void {
    this.userDataList = [];
    this._userLogService.getUserList().subscribe(res => this.userDataList = res);
  }

  showDetails(id: number) {
    this._userLogService.getUser(id).subscribe(res => {
      this.selectedUser = res;
      this.showDetailsDiv = true;
    }, (error) => {console.log (error.error.message || 'error occured')});
  }

  deleteUser(id: number) {
    this._userLogService.deleteUser(id).subscribe(res => {
      this.initializeUserListData();
    }, (error) => {console.log (error.error.message || 'error occured')});
  }

}
