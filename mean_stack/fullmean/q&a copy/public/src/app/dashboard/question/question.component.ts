import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionService } from '../../question.service';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Output() updateDashboardEvent = new EventEmitter;
  currentUser = { _id: ''};
  newQuestion = {user: '' };
  errors:string[] = [];

  constructor(private _questionService:QuestionService, private _userService:UserService, private router:Router) { }

  ngOnInit() {
    this.isLoggedIn();
    this.getCurrentUser();
  }

  createQuestion(){
  this.errors = [];
  this.newQuestion.user = this.currentUser._id;  
  return this._questionService.create(this.newQuestion)
  .then(question => {
    if(question.errors){
      for(let key in question.errors){
        let error = question.errors[key];
        this.errors.push(error.message)
      } 
    } else {
      this.router.navigateByUrl('/dashboard')
    }
  })
  .catch(err => console.log(err));
  }

   getCurrentUser(){
    this.isLoggedIn();
    this.currentUser = this._userService.getCurrentUser();
  }

  logout(){
    this._userService.logout();
    this.router.navigateByUrl('/');
  }

  isLoggedIn(){
    if(this._userService.getCurrentUser() == null){
      this.router.navigateByUrl('/');
    }
  }

}
