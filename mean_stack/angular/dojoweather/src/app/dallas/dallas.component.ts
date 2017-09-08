import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather: any; 
  constructor(private _httpService: HttpService) { 
    this.weather = this._httpService.getWeather("Dallas");
    console.log(this.weather);
  }

  ngOnInit() {
  }

}
