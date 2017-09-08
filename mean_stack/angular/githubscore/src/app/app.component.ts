import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private _httpService: HttpService){}
	user = {}
	test = 10;
	score = 0;
	error = "";
	calcScore(username){
		console.log(username)
		return this._httpService.getUser(username)
		.then(output => {console.log(output)
		this.score = output.public_repos + output.followers;
		})
		.catch(err => {
			console.log(err)
			this.error = "Your username is invalid"
		})
		
	}
}