import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  index() { 
    return this._http.get('/users').map(data => data.json()).toPromise();
  }

  create(newUser) {
    return this._http.post('/users', newUser).map(data => data.json()).toPromise()
  }


}
