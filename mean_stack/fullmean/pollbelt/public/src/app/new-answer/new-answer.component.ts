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
testdata = {};
currentUser = { _id: ''};
newAnswer = { user: '', question: ''};
param_id: string;
// questiondata = {_id: ''}
questiondata = { 
  _id: "",
  question: "",

    firstoption: {
      optionname: "",
      vote: 0
    },
    secondoption: {
      optionname: "",
      vote: 0
    },
    thirdoption: {
      optionname: "",
      vote: 0
    },
    fourthoption: {
      optionname: "",
      vote: 0
    },
    user: ""};
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
    this.newAnswer.question = this.questiondata._id;
    return this._answerService.create(this.newAnswer)
    .then(answer => {
      if(answer.errors){
        for(let key in answer.errors){
          let error = answer.errors[key];
          this.errors.push(error.message)
        }
      } else {
        this.router.navigateByUrl(`/question/${this.questiondata._id}`)
      }
    })
    .catch(err => console.log(err))
  }

  getQuestion(){
    return this._questionService.show(this.param_id)
    .then(question => this.questiondata = question)
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
  increasevote(id:string, option:string){
    console.log(id, option)
    
    // this.router.navigateByUrl('/answer/'+id)
    
    return this._questionService.increasevote(id, option)
      .then(answer => {
        if(option == '1'){
          this.questiondata.firstoption.vote++
        }
         if(option == '2'){
          this.questiondata.secondoption.vote++
        }
         if(option == '3'){
          this.questiondata.thirdoption.vote++
        }
         if(option == '4'){
          this.questiondata.fourthoption.vote++
        }
        
      })
    .catch(err => console.log(err));
  }
}
