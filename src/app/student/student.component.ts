import { Component, OnInit } from '@angular/core';
import UserModel from '../model/user.model';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  userData: UserModel[] = [];
  user =  {id:1, name: 'Mayank',email :'mayank@gmail.com', phone:'10i30393', username:'8jksjksjs'};
  constructor(private service: UserServiceService){

  }
  ngOnInit(): void {
    this.service.getAllUser().subscribe(
      data=> {
        this.userData = data;
      },
      error=>{

      }
    )
  }


  

  addUser() {
    this.service.addUser(this.user);
  }
}
