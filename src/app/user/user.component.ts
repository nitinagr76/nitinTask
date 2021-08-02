import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute,
    private _service: UserService) { }

  ngOnInit() {
  this.getUser(this.route['params']['_value'].id) 
  }

  getUser(id) {
    this._service.getUserByid(id)
    .subscribe(data => {
        this.user = data;
  });
    
  }

}
