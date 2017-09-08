import { Component } from '@angular/core';
// import math;
@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	showdate = "";
	color = "";
	switch: boolean = false;
	pst:boolean = false;
	mst:boolean = false;
	cst:boolean = false;
	est:boolean = false;
	

	getzone(offset, zonecolor){
		let d = new Date();
		let localTime = d.getTime();
		
		
		let localOffset = d.getTimezoneOffset() * 60000;
		let utc = localTime + localOffset;
		let newdate = utc + (3600000*offset);
		console.log(newdate)
		if(zonecolor== "pst"){
			this.pst = true;
			this.mst = false;
			this.cst = false;
			this.est = false;
		}
		if(zonecolor== "mst"){
			this.pst = false;
			this.mst = true;
			this.cst = false;
			this.est = false;
		}
		if(zonecolor== "cst"){
			this.pst = false;
			this.mst = false;
			this.cst = true;
			this.est = false;
		}
		if(zonecolor== "est"){
			this.pst = false;
			this.mst = false;
			this.cst = false;
			this.est = true;
		}
		
		return newdate

	}
	reset(){
			this.pst = false;
			this.mst = false;
			this.cst = false;
			this.est = false;
			this.showdate = "";
	}
	

}