import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message;
  constructor(private _messageService:MessageService) { }

  updateMessage() {
    return this._messageService.show(this.message._id)
    .then(message => this.message = message)
    .catch(err => console.log(err));
  }

  ngOnInit() {
  }

}
