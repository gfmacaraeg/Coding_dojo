import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class UserService {

  constructor(private _http:Http) { }

  create(user){
    return this._http.post('/users', user).map(data => data.json()).toPromise()
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

  setCurrentUser(user){
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem('currentUser'));
  }

}

// Component Event -> Service -> HTTP Request to Server -> Routes -> Serverside Controller -> Database -> Response to Service -> Back to Component via Promise