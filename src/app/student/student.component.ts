import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  user =  {id:1, name: 'Mayank',email :'mayank@gmail.com', phone:'10i30393', username:'8jksjksjs'};
  constructor(private service: UserServiceService){

  }

  getAllUsers() {
    return this.service.getAllUser();
  }

  addUser() {
    this.service.addUser(this.user);
  }
}
