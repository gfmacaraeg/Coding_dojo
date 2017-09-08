import { Component } from '@angular/core';
@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css']
})
export class AppComponent { 
	number = 10;
	name = 'Bill Gates';
	user = {
		firstName: 'Darth',
		lastName: 'Vader'
	}
}