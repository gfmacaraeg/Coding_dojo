import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../answer.service'
import { QuestionService } from '../question.service'
import { UserService } from '../user.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-new-answer',
  templateUrl: './new-answer.component.html',
  styleUrls: ['./new-answer.component.css']
})
export class NewAnswerComponent implements OnInit {

currentUser = { _id: ''};
newAnswer = { user: '', question: ''};
param_id: string;
question = { _id: ''};
errors:string[] = [];

  constructor(
    private _userService:UserService,
    private _questionService:QuestionService,
    private _answerService:AnswerService,
    private router:Router,
    private _route:ActivatedRoute,

  ) { this._route.params.subscribe(param => this.param_id = param.id) }

  ngOnInit() {
    this.isLoggedIn();
    this.getCurrentUser();
    this.getQuestion();
  }

  createAnswer(){
    this.errors = [];
    this.newAnswer.user = this.currentUser._id;
    this.newAnswer.question = this.question._id;
    return this._answerService.create(this.newAnswer)
    .then(answer => {
      if(answer.errors){
        for(let key in answer.errors){
          let error = answer.errors[key];
          this.errors.push(error.message)
        }
      } else {
        this.router.navigateByUrl(`/question/${this.question._id}`)
      }
    })
    .catch(err => console.log(err))
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
