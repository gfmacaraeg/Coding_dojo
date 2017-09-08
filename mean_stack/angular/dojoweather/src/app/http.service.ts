import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  getWeather(city){
      return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+ city +'id=524901&APPID=309f484433bf9641b098b7db10a52691').map(data=>data.json()).toPromise()

    }
}