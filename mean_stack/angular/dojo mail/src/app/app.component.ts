import { Component } from '@angular/core';
@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css']
})
export class AppComponent { 
	test = true;
	emaillist = [
		{
			'email':'bill@gates.com',
			'importance': 1,
			'subject': 'New Windows',
			'contents': 'WIndows XI will launch in year 2100.'
		},
		{
			'email':'ada@lovelace.com',
			'importance': 1,
			'subject': 'Programming',
			'contents': 'Enchantress if Numbers.'
		},
		{
			'email':'john@carmac.com',
			'importance': 0,
			'subject': 'Updated Algo',
			'contents': 'New algorithm for shadow volumes.'
		},
		{
			'email':'gabe@newell.com',
			'importance': 0,
			'subject': 'HL3!',
			'contents': 'Just kidding...'
		}
	]
	

}