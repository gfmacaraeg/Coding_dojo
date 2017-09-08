import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weather: any; 
  constructor(private _httpService: HttpService) {
    this.weather = this._httpService.getWeather("San Jose");
    console.log(this.weather);
   }

  ngOnInit() {
  }

}
