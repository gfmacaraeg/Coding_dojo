import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class CommentService {

  constructor(private _http:Http) { }

  create(comment){
    return this._http.post('/comments', comment).map(data => data.json()).toPromise()
  }

}
