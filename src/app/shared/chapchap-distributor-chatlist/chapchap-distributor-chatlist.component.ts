import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

export interface Chatcard {
  card_img: string;
  card_name: string;
  card_date: string;
  card_msg: string;
}

@Component({
  selector: 'app-chapchap-distributor-chatlist',
  templateUrl: './chapchap-distributor-chatlist.component.html',
  styleUrls: ['./chapchap-distributor-chatlist.component.scss']
})
export class ChapchapDistributorChatlistComponent implements OnInit {

  constructor(
    private bottomSheetRef: MatBottomSheetRef<ChapchapDistributorChatlistComponent>
  ) { }

  chat_list: Chatcard[] = [
    {
      card_img: '../../assets/img/team3.jpg',
      card_name: 'Opio James',
      card_date: '30 mins ago',
      card_msg: 'Hello sir I am running out of Omo'
    }, {
      card_img: '../../assets/img/team1.jpg',
      card_name: 'Aine Thomas',
      card_date: '07:30 am',
      card_msg: 'Hello there not a good morning but we have realised 5 damaged cartons of Lux. And it was our last batch.'
    }, {
      card_img: '../../assets/img/team2.jpg',
      card_name: 'Anebakyo Quin',
      card_date: 'Jan 15',
      card_msg: 'Good evening we have received our consignment. Always a pleasure working with you.'
    }, {
      card_img: '../../assets/img/team4.jpg',
      card_name: 'Sekitto Andre',
      card_date: 'Jan 1',
      card_msg: 'Happy new year from Sekitto & sons distributors. What a journey we had our sales are blossoming'
    }, {
      card_img: '../../assets/img/team5.jpg',
      card_name: 'Ocen Peter',
      card_date: 'Dec 31 18',
      card_msg: 'Hello sir we have superseded our christmas targets! It is unbelievable how people are so into your products.'
    }, {
      card_img: '../../assets/img/team6.jpg',
      card_name: 'Ongwen Federer',
      card_date: 'Dec 24 18',
      card_msg: 'Hello I am wondering if you can gzt us Lipton tea, Knorr, Blueband and bru coffee ASAP'
    }
  ];

  closeChat(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  openChat(event: MouseEvent): void {
    this.bottomSheetRef.afterOpened();
    event.preventDefault();
    this.bottomSheetRef.dismiss();
  }

  ngOnInit() {
  }

}
