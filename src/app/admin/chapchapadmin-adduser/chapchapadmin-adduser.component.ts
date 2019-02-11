import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ChapchapNotificationsService } from '../../shared/chapchap-notifications.service';
import { roles } from './../../model/companyroles.model';

export interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-chapchapadmin-adduser',
  templateUrl: './chapchapadmin-adduser.component.html',
  styleUrls: ['./chapchapadmin-adduser.component.scss']
})

export class ChapchapadminAdduserComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  rehide = true;
  job_description =  roles;
  profileImage = '../assets/img/avatar.gif';
  imageToUpload: File = null;
  constructor(
              private notificationService: ChapchapNotificationsService,
              ) { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
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
