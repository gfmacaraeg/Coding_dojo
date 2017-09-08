import { Component } from '@angular/core';
@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css']
})
export class AppComponent { 
	newgoku = {};
	arr =[];
	// power = 0;
	goku = {
		power: 0
	}
	powerlevel(power){
		this.goku.power = power;
		console.log(this.goku.power)
	}
	constructor(){
		for(let i = 1; i <= 100; i++){
			this.arr.push(i)
		}
	}
}