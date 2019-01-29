import { Component, OnInit } from '@angular/core';

export interface Contact {
  title: string;
  icon: string;
}

@Component({
  selector: 'app-chapchap-contact',
  templateUrl: './chapchap-contact.component.html',
  styleUrls: ['./chapchap-contact.component.scss']
})
export class ChapchapContactComponent implements OnInit {

  constructor() { }

  ChapAddress: Contact[] = [
    {
      title: 'Plot 1234, Block 185, Namugongo',
      icon: 'place'
    },
    {
      title: '+256 392 002 221',
      icon: 'stay_current_portrait'
    },
    {
      title: '+256 706 741 388',
      icon: 'stay_current_portrait'
    },
    {
      title: 'support@chachap.co',
      icon: 'mail_outline'
    },
    {
      title: 'www.chapchap.co',
      icon: 'language'
    }
  ];

  ngOnInit() {
  }

}
