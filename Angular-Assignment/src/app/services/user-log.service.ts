import { Injectable } from '@angular/core';
import { UserModel } from 'src/models/userModel';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLogService {
  private SERVER_URL: string = "http://localhost:8080/api";

  private USER_LIST_URL: string = '/userDataList';

  constructor(
    private http: HttpClient
  ) { }

  logMyDetail(user: UserModel) {
    console.log('User Details', user);
  }

  getUserList(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.SERVER_URL + this.USER_LIST_URL);
  }

  addUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.SERVER_URL + this.USER_LIST_URL, user);
  }

  deleteUser(id: number): Observable<UserModel> {
    return this.http.delete<UserModel>(this.SERVER_URL + this.USER_LIST_URL + '/' + id);
  }

  getUser(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(this.SERVER_URL + this.USER_LIST_URL + '/' + id);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server error !!")
  }

}
