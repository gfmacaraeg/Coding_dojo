import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';
import { UserService } from './../user.service';
import { AnswerService } from './../answer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.css']
})
export class ShowQuestionComponent implements OnInit {
currentUser = {};
param_id:string;
question = { answers: [] }

  constructor(
    private _questionService:QuestionService, 
    private _userService:UserService, 
    private router:Router, 
    private _route:ActivatedRoute, 
    private _answerService:AnswerService) {
    this._route.params.subscribe(param => this.param_id = param.id)
   }

  ngOnInit() {
    this.isLoggedIn();
    this.getQuestion();
  }

  increaseLikes(id:string, idx:number){
    console.log(id)
    return this._answerService.increaseLikes(id)
      .then(answer => this.question.answers[idx].likes++)
    .catch(err => console.log(err));
  }

  getQuestion(){
    return this._questionService.show(this.param_id)
    .then(question => this.question = question)
    .catch(err => console.log(err));
  }
   getCurrentUser(){
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
