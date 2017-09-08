import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { MessageService } from '../message.service';
import { UserService } from '../user.service';
import { CommentService } from '../comment.service';
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
messages = { id: ""}
currentUser = { _id: '' };
 newAnswer = { message: '', user: {} };

  constructor(private _commentService:CommentService, private _route: ActivatedRoute, private _userService:UserService, private _messageService:MessageService, private router:Router) { 
	this._route.params.subscribe((param)=>{
      this.messages.id = param.id
      console.log(this.messages)
    })
  }

  ngOnInit() {
    this.setCurrentUser();
    this.getCurrentQuestion();
  }

 createAnswer(){
 	let user = this._userService.getCurrentUser();
    console.log(user);
    this.newAnswer.user = user;
 	console.log("im inside create answer")
    this.newAnswer.message = this.messages.id;
    console.log(this.newAnswer)
    
    console.log(this.newAnswer);
    return this._commentService.create(this.newAnswer)
    .then(comment => console.log("Im in .then"))
    .catch(err => console.log(err));
    
  }
  getCurrentQuestion(){
    return this._messageService.getCurrentQuestion(this.messages.id)
    .then(messages => this.messages = messages)
    .catch(err => console.log(err));
  }

  setCurrentUser(){
    this.currentUser = this._userService.getCurrentUser();
  }

}
