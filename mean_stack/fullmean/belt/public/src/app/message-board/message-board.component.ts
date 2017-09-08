import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {
  currentUser = { _id: '' };
  messages:any[] = [];

  constructor(private _userService:UserService, private _messageService:MessageService, private router:Router) { }

  ngOnInit() {
    this.setCurrentUser();
    this.getQuestions();
    console.log(this.messages);
  }

  getQuestions(){
    return this._messageService.getQuestions()
    .then(messages => this.messages = messages)
    .catch(err => console.log(err));
  }

  setCurrentUser(){
    this.currentUser = this._userService.getCurrentUser();
  }

}
