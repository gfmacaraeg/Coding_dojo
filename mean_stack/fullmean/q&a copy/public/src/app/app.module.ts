//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module'

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionComponent } from './dashboard/question/question.component';
import { NewAnswerComponent } from './new-answer/new-answer.component';
import { ShowQuestionComponent } from './show-question/show-question.component';

//Services
import { UserService } from './user.service';
import { QuestionService } from './question.service';
import { AnswerService } from './answer.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    QuestionComponent,
    NewAnswerComponent,
    ShowQuestionComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    UserService,
    QuestionService,
    AnswerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
