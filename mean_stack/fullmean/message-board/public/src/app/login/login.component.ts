import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser = {};

  constructor(private _userService:UserService, private router:Router) { }

  ngOnInit() {
  }

  createUser(){
    return this._userService.create(this.newUser)
    .then(user => { 
      if(user.errors){
        //create front-end error messages
      } else {
        this._userService.setCurrentUser(user);
        //redirect to message-board
        this.router.navigateByUrl('dashboard')
      }
    })
    .catch(err => console.log(err));
  }

}
