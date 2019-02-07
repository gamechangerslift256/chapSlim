import { Component, OnInit } from '@angular/core';
import { Partition } from '../model/settings.model';

@Component({
  selector: 'app-chapchap-settings',
  templateUrl: './chapchap-settings.component.html',
  styleUrls: ['./chapchap-settings.component.scss']
})
export class ChapchapSettingsComponent implements OnInit {

  constructor() { }

  first: Partition[] = [
    {
      title: 'Manufacturer Number',
      sub: 'CCM00001',
      icon: 'account_circle'
    },
    {
      title: 'Full Name',
      sub: 'John Doe',
      icon: 'person_outline'
    },
    {
      title: 'Phone Number',
      sub: '+256752000000',
      icon: 'call'
    },
    {
      title: 'Email Address',
      sub: 'johndoe@example.com',
      icon: 'mail_outline'
    }
  ];

  second: Partition[] = [
    {
      title: 'Password',
      sub: 'Reset your password',
      icon: 'vpn_key'
    },
    {
      title: 'Tin Number',
      sub: 'TIN4567893',
      icon: 'donut_large'
    },
    {
      title: 'Phone number',
      sub: '+25641235678',
      icon: 'stay_current_portrait'
    },
    {
      title: 'Physical Location',
      sub: '6th Street Industrial Area, Kampala',
      icon: 'place'
    }
  ];

  changeTheme() {
    if (document.body.classList.contains('chapchap-light-theme')) {
      document.body.classList.remove('chapchap-light-theme');
      document.body.classList.add('chapchap-dark-theme');
    } else {
      document.body.classList.remove('chapchap-dark-theme');
      document.body.classList.add('chapchap-light-theme');
    }
  }

  ngOnInit() {
  }

}
