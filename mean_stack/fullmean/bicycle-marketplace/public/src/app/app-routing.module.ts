import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MessageBoardComponent } from './message-board/message-board.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: LoginComponent},
    { path: 'dashboard', component: MessageBoardComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }