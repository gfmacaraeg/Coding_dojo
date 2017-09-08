import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather: any; 
  constructor(private _httpService: HttpService) { 
    this.weather = this._httpService.getWeather("Burbank");
    console.log(this.weather);
  }

  ngOnInit() {
  }

}
