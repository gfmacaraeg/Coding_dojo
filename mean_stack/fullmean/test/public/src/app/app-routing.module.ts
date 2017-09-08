import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { ShowquestionComponent } from './showquestion/showquestion.component';
import { AnswerComponent } from './answer/answer.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: LoginComponent},
    { path: 'dashboard', component: MessageBoardComponent},
    { path: 'newquestion', component: NewquestionComponent},
    { path: 'question/:id', component: ShowquestionComponent },
    { path: 'answer/:id', component: AnswerComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }