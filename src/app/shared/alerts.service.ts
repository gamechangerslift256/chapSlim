import { Injectable } from '@angular/core';
// import { Message } from './../model/message.model';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  messages: string[] = [];

  add( message: string ) {
                            this.messages.push(message);
                          }

  clear() {
            this.messages = [];
          }

  constructor() { }
}
