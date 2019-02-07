import { Component, OnInit } from '@angular/core';
// import { Message } from './../../model/message.model';
import { AlertsService } from './../alerts.service';

// component that will display messages to the user

@Component({
  selector: 'app-chapchap-messages',
  templateUrl: './chapchap-messages.component.html',
  styleUrls: ['./chapchap-messages.component.scss']
})
export class ChapchapMessagesComponent implements OnInit {

  constructor( public messageService: AlertsService) { }

  ngOnInit() {
  }

}
