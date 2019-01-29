import { Component, OnInit } from '@angular/core';

const N = 100000;
const single_digit = N.toString().split('').map(Number);

@Component({
  selector: 'app-chapchap-monitor-transact',
  templateUrl: './chapchap-monitor-transact.component.html',
  styleUrls: ['./chapchap-monitor-transact.component.scss']
})
export class ChapchapMonitorTransactComponent implements OnInit {

  chapTransactions = single_digit;
  chapOnline = 1044;

  constructor() { }

  ngOnInit() {
  }

}
