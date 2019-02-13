import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetConfig } from '@angular/material';
import { ChapchapDistributorChatlistComponent } from './../chapchap-distributor-chatlist/chapchap-distributor-chatlist.component';

@Component({
  selector: 'app-chapchap-distributor-chat',
  templateUrl: './chapchap-distributor-chat.component.html',
  styleUrls: ['./chapchap-distributor-chat.component.scss']
})
export class ChapchapDistributorChatComponent implements OnInit {

  config: MatBottomSheetConfig = {
    closeOnNavigation: true,
    disableClose: true
  };

  constructor(
              private bottomSheet: MatBottomSheet
             ) { }

  ngOnInit() {
  }

  openBottomSheet(): void {
    this.config['panelClass'] = ['distributor-chat'];
     this.bottomSheet.open(
                              ChapchapDistributorChatlistComponent,
                              this.config
                            );
  }

}
