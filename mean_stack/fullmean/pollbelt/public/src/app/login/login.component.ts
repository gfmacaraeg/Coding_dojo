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
  errors: string[] = [];
  constructor(private _userService:UserService, private router:Router) { }

  ngOnInit() {
  }

  createUser(){
    this.errors = [];
    return this._userService.create(this.newUser)
    .then(user => { 
      if(user.errors){
        for(let key in user.errors){
          let error = user.errors[key];
          this.errors.push(error.message)
        }
      } else {
        this._userService.setCurrentUser(user);
        this.router.navigateByUrl('/dashboard')
      }
    })
    .catch(err => console.log(err));
  }

}
