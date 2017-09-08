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
import { CommentComponent } from './message-board/message/comment/comment.component';
import { NewCommentComponent } from './message-board/message/new-comment/new-comment.component';

//Services
import { UserService } from './user.service';
import { MessageService } from './message.service';
import { CommentService } from './comment.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessageBoardComponent,
    MessageComponent,
    CommentComponent,
    NewCommentComponent
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
