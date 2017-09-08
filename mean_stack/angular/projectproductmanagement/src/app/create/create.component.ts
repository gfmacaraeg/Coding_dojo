import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
	@Output() myEvent = new EventEmitter;
	prodList = [];
	product = { 
		title: "",
		price: null,
		imgurl: ""

	}
	createprod(title, price, image){
		this.product.title = title;
		this.product.price = price;
		this.product.imgurl = image;
		console.log(this.product);
		this.prodList.push(this.product);
		this.product = { 
		title: "",
		price: null,
		imgurl: ""

		}
		this.myEvent.emit();
		console.log(this.prodList);
	}
	callParent(){

	}

  constructor() { }

  ngOnInit() {
  }

}
