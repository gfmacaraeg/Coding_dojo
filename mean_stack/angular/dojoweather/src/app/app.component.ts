import { Component } from '@angular/core';
import { HttpService } from './http.service';
@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css']
})
export class AppComponent { 
	cities = [
		{link: "seattle", city: "Seattle WA"},
		{link: "sanjose", city: "San Jose CA"},
		{link: "burbank", city: "Burbank CA"},
		{link: "dallas", city: "Dallas TX"},
		{link: "washington", city: "Washington DC"},
		{link: "chicago", city: "Chicago IL"}
	]
	weather: any;
	constructor(private _httpService: HttpService){
		// weather(cityname){

		// }
		// this.weather = this._httpService.getWeather("Dallas");
		// console.log(this.weather);

		}
	}
