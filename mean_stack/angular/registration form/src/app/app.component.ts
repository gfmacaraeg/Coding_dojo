import { Component } from '@angular/core';
@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css']
})
export class AppComponent { 
	user = {
	firstname: '',
	lastname: '',
	email: '',
	password: '',
	street: '',
	unit: '',
	city: '',
	state: ''

  };
}