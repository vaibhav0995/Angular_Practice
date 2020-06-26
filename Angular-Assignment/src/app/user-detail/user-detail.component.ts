import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/models/userModel';
import { Router, ActivatedRoute } from '@angular/router';
import { UserLogService } from '../services/user-log.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userObj: UserModel;
  userId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _userLogService: UserLogService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = +params['id'];
      this.getUserDetails();
    });
  }

  getUserDetails() {
    this._userLogService.getUser(this.userId).subscribe(res => this.userObj = res);
  }

}
