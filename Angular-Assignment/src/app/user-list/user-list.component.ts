import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/models/userModel';
import { UserLogService } from '../services/user-log.service';
import { Router } from '@angular/router';

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
    private _userLogService: UserLogService,
    private route:Router
  ) { }

  ngOnInit() {
    this.initializeUserListData();
  }

  initializeUserListData(): void {
    this.userDataList = [];
    this._userLogService.getUserList().subscribe(res => this.userDataList = res);
  }

  showDetails(id: number) {
    this.route.navigate(['/user',id]);
  }

  deleteUser(id: number) {
    this._userLogService.deleteUser(id).subscribe(res => {
      this.initializeUserListData();
    }, (error) => {console.log (error.error.message || 'error occured')});
  }

}
