import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.modules';
@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css']
})
export class AppComponent { 
	invoked(){
		console.log("invoked");
	}
}