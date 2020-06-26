import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'; // npm install angular-in-memory-web-api --save
import { UserModel } from 'src/models/userModel';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InMemoryUserService implements InMemoryDbService {
  constructor() { }

  createDb() {
    let userDataList = [];
    for (let i = 1; i <= 5; i++) {
      let userModelObj = new UserModel();
      userModelObj.id = i;
      userModelObj.first_name = "User-" + i;
      userModelObj.last_name = "last-name-" + i;
      userModelObj.email = userModelObj.first_name + "@" + 'domain.com';
      userModelObj.isActive = true;

      userDataList.push(userModelObj);
    }

    return {userDataList};
  }
}
