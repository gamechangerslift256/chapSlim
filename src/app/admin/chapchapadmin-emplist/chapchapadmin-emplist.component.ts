import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-chapchapadmin-emplist',
  templateUrl: './chapchapadmin-emplist.component.html',
  styleUrls: ['./chapchapadmin-emplist.component.scss']
})
export class ChapchapadminEmplistComponent implements OnInit {

  employees: User[] = [
    {
      card_img: '../../assets/img/team3.jpg',
      card_name: 'Opio James',
      card_location: 'Gulu',
      card_phone: '+256.752.000000'
    }, {
      card_img: '../../assets/img/team1.jpg',
      card_name: 'Aine Thomas',
      card_location: 'Mbarara',
      card_phone: '+256.752.000000'
    }, {
      card_img: '../../assets/img/team2.jpg',
      card_name: 'Anebakyo Quin',
      card_location: 'Mayuge',
      card_phone: '+256.752.000000'
    }, {
      card_img: '../../assets/img/team4.jpg',
      card_name: 'Sekitto Andre',
      card_location: 'Masaka',
      card_phone: '+256.752.000000'
    }, {
      card_img: '../../assets/img/team5.jpg',
      card_name: 'Ocen Peter',
      card_location: 'Amoro',
      card_phone: '+256.752.000000'
    }, {
      card_img: '../../assets/img/team6.jpg',
      card_name: 'Ongwen Federer',
      card_location: 'Kotido',
      card_phone: '+256.752.000000'
    }
  ];

  constructor(private breakpointObserver: BreakpointObserver ) { }

  ngOnInit() {
  }

}
