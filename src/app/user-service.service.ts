import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import UserModel from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userdata: UserModel[] = [
    {id:1, name: 'Edward',email :'edward@gmail.com', phone:'928382223', username:'ajsjdjdj'}
  ]
  constructor(private http: HttpClient) { }

  getAllUser(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/users')
  }

  addUser(user: UserModel) {
    this.userdata.push(user)
  }

}
