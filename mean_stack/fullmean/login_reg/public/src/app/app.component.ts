import { Component } from '@angular/core';
@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css']
})
export class AppComponent { 
	number = 10;
	name = 'Bill Gates';
	newQuestion = {
		question: "What is the best dog breed",

		firstoption: {
			optionname: "Lab"
		},
		secondoption: {
			optionname: "Shitzu"
		},
		thirdoption: {
			optionname: "Pomerainian"
		},
		fourthoption: {
			optionname: "Snoopdog"
		}
	}
}