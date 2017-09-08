import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class CommentService {

  constructor(private _http:Http) { }

  create(comment){
    return this._http.post('/answers', comment).map(data => data.json()).toPromise()
  }

  getCurrentAnswers(questionid){
  	console.log("In getcurrent answers service")
  	// return this._http.post('/answers/', questionid ).map(data => data.json()).toPromise()
  	return this._http.get('/answers/'+questionid).map(data => data.json()).toPromise()
  }

}
