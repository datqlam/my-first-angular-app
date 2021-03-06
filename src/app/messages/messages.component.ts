import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {

  // The messagesService property must be public because you're going to bind to it in the template
  constructor(public messagesService : MessagesService) { }

  ngOnInit(): void {
  }

}
