import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users:any[] = [];
  newUser = {};
  error_msgs:any[] = []

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    return this._userService.index()
    .then(users => { 
      console.log('users: ', users);
      this.users = users;
    })
    .catch(err => { console.log(err) })
  }

  createUser(newUser){
    console.log(newUser)
    this.error_msgs = [];
    return this._userService.create(newUser)
    .then(user => {
      console.log('.then')
      console.log(user);
      if(user.errors){
        for(let key in user.errors){
          let error = user.errors[key]
          this.error_msgs.push(error.message);
        }
      }
      this.getUsers();
    })
    .catch(err => { console.log(err) });
  }
}
