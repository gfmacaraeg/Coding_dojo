import { Component } from '@angular/core';
// import math;
@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	newArr = [];
	constructor() {
		for(var index = 0; index <= 10; index++) {
			this.newArr.push(Math.floor(Math.random() * 6) + 1);
			console.log(this.newArr);
		}
	}
	
	choice = [
		'red',
		'green',
		'yellow',
		'orange',
		'blue',
		'fuchsia',
		'red'


	];

}