import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { UserService } from '../user.service';
import { CommentService} from '../comment.service';

@Component({
  selector: 'app-showquestion',
  templateUrl: './showquestion.component.html',
  styleUrls: ['./showquestion.component.css']
})
export class ShowquestionComponent implements OnInit {
messages = { id: ""}
currentUser = { _id: '' };
answers = {};
  constructor(private _commentService: CommentService, private _route: ActivatedRoute, private _userService:UserService, private _messageService:MessageService, private router:Router) {
  	this._route.params.subscribe((param)=>{
      this.messages.id = param.id
      console.log(this.answers)

    }) 
   }

   ngOnInit() {
    this.setCurrentUser();
    this.getCurrentQuestion();
    this.getAnswers();
    console.log(this.answers);
  }

  getCurrentQuestion(){
    return this._messageService.getCurrentQuestion(this.messages.id)
    .then(messages => this.messages = messages)
    .catch(err => console.log(err));
  }

getAnswers(){
    return this._commentService.getCurrentAnswers(this.messages.id)
    .then(answers => console.log(answers))
    .catch(err => console.log(err));
  }


  setCurrentUser(){
    // this.currentUser = this._userService.setCurrentUser();
  }

}
