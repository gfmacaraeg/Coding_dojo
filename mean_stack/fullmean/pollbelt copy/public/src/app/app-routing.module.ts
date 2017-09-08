import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionComponent } from './dashboard/question/question.component';
import { ShowQuestionComponent } from './show-question/show-question.component';
import { NewAnswerComponent } from './new-answer/new-answer.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'create', component: QuestionComponent},
    { path: 'question/:id', component: ShowQuestionComponent},
    { path: 'answer/:id', component: NewAnswerComponent},
    { path: 'refresh', component: DashboardComponent},
    { path: 'refreshvote/:id', component: NewAnswerComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }