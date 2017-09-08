import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  links = ["link1","link2","link3","link4","link5","link6"];
  constructor() { }

  ngOnInit() {
  }

}
