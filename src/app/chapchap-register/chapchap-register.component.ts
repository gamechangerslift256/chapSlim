import { CompanyModel } from './../model/companyprofile.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ChapchapNotificationsService } from '../shared/chapchap-notifications.service';

@Component({
  selector: 'app-chapchap-register',
  templateUrl: './chapchap-register.component.html',
  styleUrls: ['./chapchap-register.component.scss']
})
export class ChapchapRegisterComponent implements OnInit {

  company: CompanyModel ;

//  registerForm: FormGroup;

  hide = true;

  profileImage = '../assets/img/avatar.gif';

  imageToUpload: File = null;

  constructor(
                // add form builder service
                private fb: FormBuilder,
                private notificationService: ChapchapNotificationsService,
              ) { }

  ngOnInit() {
                // create a data model on init
                 /*this.registerForm = this.fb.group({
                  company_logo: [this.company.company_logo, [Validators.required]],
                  company_name: [this.company.company_name, [Validators.required]],
                  company_email: [this.company.company_email, [Validators.required, Validators.email]],
                  company_location: [this.company.company_location, [Validators.required]],
                  company_phone: [this.company.company_phone, [Validators.required]],
                  company_website: [this.company.company_website, [Validators.required]],
                  company_country: [this.company.company_country, [Validators.required]],
                  company_password: [this.company.company_password, [Validators.required]],
                });*/
              }

  onAdd() {
    this.notificationService.success(':: Submitted successfully');
  }

  handleImageInput(file: FileList) {
    this.imageToUpload = file.item(0);

    // show image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.profileImage = event.target.result;
    };
    reader.readAsDataURL(this.imageToUpload);
  }

  onReset() {
    this.profileImage = '../assets/img/avatar.gif';
  }

}
