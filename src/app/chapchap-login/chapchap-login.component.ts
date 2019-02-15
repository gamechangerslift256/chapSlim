import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from './../model/login.model';
@Component({
  selector: 'app-chapchap-login',
  templateUrl: './chapchap-login.component.html',
  styleUrls: ['./chapchap-login.component.scss']
})
export class ChapchapLoginComponent implements OnInit {

  // declare a user as a regiterModel & initalise
  user: LoginModel = new LoginModel();

  // tie form controls together
  loginForm:  FormGroup;

  hide = true;

  current_year = new Date().getFullYear();

  constructor(
                // add form builder service
                private fb: FormBuilder
              ) { }

  ngOnInit() {
                  // create a data model on init
                  this.loginForm = this.fb.group({
                                                    phonenumber: [this.user.phonenumber, [Validators.required]],
                                                    password: [this.user.password, [Validators.required, Validators.email]],
                                                    remember: [this.user.remember]
                                                });
              }

}
