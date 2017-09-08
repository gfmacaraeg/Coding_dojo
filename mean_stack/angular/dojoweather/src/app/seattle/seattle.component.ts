import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather: any; 

  constructor(private _httpService: HttpService) {
    this.weather = this._httpService.getWeather("seattle");
    console.log(this.weather);
   }

  ngOnInit() {
  }

}
