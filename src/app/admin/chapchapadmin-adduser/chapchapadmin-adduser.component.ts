import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-chapchapadmin-adduser',
  templateUrl: './chapchapadmin-adduser.component.html',
  styleUrls: ['./chapchapadmin-adduser.component.scss']
})
export class ChapchapadminAdduserComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  rehide = true;

  constructor() { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
