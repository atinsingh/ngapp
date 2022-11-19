import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import UserModel from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userdata: UserModel[] = [
    {id:1, name: 'Edward',email :'edward@gmail.com', phone:'928382223', username:'ajsjdjdj'}
  ]
  constructor() { }

  getAllUser(): UserModel[] {
    return this.userdata;
  }

  addUser(user: UserModel) {
    this.userdata.push(user)
  }

}
