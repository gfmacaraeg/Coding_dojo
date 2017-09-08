import { Component } from '@angular/core';
@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css']
})
export class AppComponent { 

	db = [];

	quote = {
		id: this.db.length,
		content: "",
		author: "",
		votes: 0
	}
	addquote(content, author){
		this.quote = {
			id: this.db.length,
			content: "",
			author: "",
			votes: 0
		}
		this.quote.content = content;
		this.quote.author = author;
		this.db.push(this.quote);
		console.log(this.db);
	}
	addvote(idx){
		this.db[idx].votes++;
	}
	subtractvote(idx){
		if(this.db[idx].votes > 0){
		this.db[idx].votes--;
		}
	}
	delete(idx){
		this.db.splice(idx ,1);
	}
	
}