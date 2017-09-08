import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class AnswerService {

  constructor(private _http:Http) { }

  create(answer){
    return this._http.post('/answers', answer).map(data => data.json()).toPromise()
  }

  increaseLikes(id:string){
  return this._http.put(`/answers/${id}`, {}).map(data => data.json()).toPromise()
  }

}
