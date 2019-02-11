import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ChapchapNotificationsService } from '../../shared/chapchap-notifications.service';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-chapchap-distributor-addnew',
  templateUrl: './chapchap-distributor-addnew.component.html',
  styleUrls: ['./chapchap-distributor-addnew.component.scss']
})
export class ChapchapDistributorAddnewComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  rehide = true;
  constructor(
                private notificationService: ChapchapNotificationsService,
                private dialogRef: MatDialogRef<ChapchapDistributorAddnewComponent>
              ) { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onAdd() {
    this.notificationService.success(':: Submitted successfully');
    this.onClose();
  }

  onClose() {
    this.dialogRef.close();
  }

}
