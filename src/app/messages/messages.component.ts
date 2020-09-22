import { Component, OnInit } from '@angular/core';
import { MessageService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {

  // The messageService property must be public because you're going to bind to it in the template
  constructor(public messageService : MessageService) { }

  ngOnInit(): void {
  }

}
