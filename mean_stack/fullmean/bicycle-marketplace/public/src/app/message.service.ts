import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class MessageService {

  constructor(private _http:Http) { }

  getMessages(){
    return this._http.get('/messages').map(data => data.json()).toPromise()
  }

  create(message){
    return this._http.post('/messages', message).map(data => data.json()).toPromise()
  }

  show(id){
    return this._http.get(`/messages/${id}`).map(data => data.json()).toPromise()
  }

}
