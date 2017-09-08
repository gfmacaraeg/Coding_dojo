import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  weather: any; 
  constructor(private _httpService: HttpService) {
    this.weather = this._httpService.getWeather("Burbank");
    console.log(this.weather);
   }

  ngOnInit() {
  }

}
