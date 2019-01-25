import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapchap-login',
  templateUrl: './chapchap-login.component.html',
  styleUrls: ['./chapchap-login.component.scss']
})
export class ChapchapLoginComponent implements OnInit {

  hide = true;

  current_year = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
