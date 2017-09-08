import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class MessageService {

  constructor(private _http:Http) { }

  getQuestions(){
    return this._http.get('/questions').map(data => data.json()).toPromise()
  }

  getCurrentQuestion(id){
    return this._http.get('/questions/'+id).map(data => data.json()).toPromise()
  }

  create(message){
    return this._http.post('/questions', message).map(data => data.json()).toPromise()
  }

  show(id){
    return this._http.get(`/questions/${id}`).map(data => data.json()).toPromise()
  }

}
