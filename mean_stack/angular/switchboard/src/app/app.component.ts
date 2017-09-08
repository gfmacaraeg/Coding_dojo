import { Component } from '@angular/core';
// import math;
@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	arr = [0,0,0,0,0,0,0,0];
	// arr2 = [0,1,2,3,4,5,6,7];
	dec(idx){
		console.log(idx);
		this.arr[idx]--;
	}
	add(idx){
		this.arr[idx]++;
		console.log(idx);
	}
}