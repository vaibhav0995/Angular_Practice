import { Injectable } from '@angular/core';
import { UserModel } from 'src/models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserLogService {

  constructor() { }

  logMyDetail(user: UserModel) {
    console.log('User Details', user);
  }
}
