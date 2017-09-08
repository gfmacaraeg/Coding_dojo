import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommentService } from '../../../comment.service';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {
  @Input() message;
  @Output() updateMessageEvent = new EventEmitter;
  newComment = { message: '', user: {} };

  constructor(private _commentService:CommentService, private _userService:UserService) { }

  createComment(){
    this.newComment.message = this.message._id;
    let user = this._userService.getCurrentUser();
    console.log(user);
    this.newComment.user = user;
    return this._commentService.create(this.newComment)
    .then(comment => this.updateMessage())
    .catch(err => console.log(err));
    
  }

  updateMessage(){
    this.updateMessageEvent.emit()
  }

  ngOnInit() {

  }

}
