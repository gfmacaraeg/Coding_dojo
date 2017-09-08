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
import { MessageBoardComponent } from './message-board/message-board.component';
import { MessageComponent } from './message-board/message/message.component';


//Services
import { UserService } from './user.service';
import { MessageService } from './message.service';
import { CommentService } from './comment.service';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { ShowquestionComponent } from './showquestion/showquestion.component';
import { AnswerComponent } from './answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessageBoardComponent,
    MessageComponent,
    NewquestionComponent,
    ShowquestionComponent,
    AnswerComponent
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
    MessageService,
    CommentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
