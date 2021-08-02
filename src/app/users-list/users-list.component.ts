import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  userList: Object;

  constructor( private _service: UserService) { }

  ngOnInit() {
   this.getUser();
  }

  getUser() {

    this._service.getUsers()
    .subscribe(data => {
        this.userList = data;
        console.log(this.userList,'helloo')  
        //console.log(this.customers);        
  });
  }

  deleteUser(id) {
    this._service.deleteUser(id)
    .subscribe(data => {
      console.log(data);
  });

  }

}
