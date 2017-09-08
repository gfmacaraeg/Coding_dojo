import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather: any; 
  constructor(private _httpService: HttpService) { 
    this.weather = this._httpService.getWeather("Chicago");
    console.log(this.weather);
  }

  ngOnInit() {
  }

}
