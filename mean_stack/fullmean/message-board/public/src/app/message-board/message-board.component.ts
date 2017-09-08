import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {
  currentUser = { _id: '' };
  newMessage = { user: '' };
  messages:any[] = [];

  constructor(private _userService:UserService, private _messageService:MessageService) { }

  ngOnInit() {
    this.setCurrentUser();
    this.getMessages();
  }

  getMessages(){
    return this._messageService.getMessages()
    .then(messages => this.messages = messages)
    .catch(err => console.log(err));
  }

  createMessage(){
    this.newMessage.user = this.currentUser._id;
    return this._messageService.create(this.newMessage)
    .then(message => {
      if(message.errors){
        //display error messages
      } else {
        console.log('new msg: ', message);
        this.getMessages();
      }
    })
    .catch(err => console.log(err));
  }

  setCurrentUser(){
    this.currentUser = this._userService.getCurrentUser();
  }

}
