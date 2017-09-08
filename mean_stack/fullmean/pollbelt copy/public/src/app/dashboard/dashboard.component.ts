import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser = {};
  questions: any[] = [];

  constructor(private _userService:UserService, private _questionService:QuestionService, private router:Router) { }

  ngOnInit() {
    this.isLoggedIn();
    this.getCurrentUser();
    this.getQuestions();
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
  getQuestions(){
    return this._questionService.index()
    .then(questions => this.questions = questions)
    .catch(err => console.log(err));
  }
    delete(id){
    console.log(id)
    return this._questionService.delete(id)
    .then(deleted => {
    if(deleted.errors){
      console.log(deleted.errors);
    } else {
      this.router.navigateByUrl('/refresh')
    }
  })
  }
}
