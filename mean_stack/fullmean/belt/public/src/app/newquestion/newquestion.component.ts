import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newquestion',
  templateUrl: './newquestion.component.html',
  styleUrls: ['./newquestion.component.css']
})
export class NewquestionComponent implements OnInit {
	newQuestion = { user: '' };
	currentUser = { _id: '' };
  constructor(private _userService:UserService, private _messageService:MessageService, private router:Router) { }

  ngOnInit() {
  	this.setCurrentUser();
  }
setCurrentUser(){
    this.currentUser = this._userService.getCurrentUser();
  }
 createQuestion(){
  	console.log("inside create question")
    this.newQuestion.user = this.currentUser._id;
    return this._messageService.create(this.newQuestion)
    .then(message => {
      if(message.errors){
        //display error messages
      } else {
      this.router.navigateByUrl('dashboard')
        // console.log('new msg: ', message);
        // this.getMessages();
      }
    })
    .catch(err => console.log(err));
  }
}
