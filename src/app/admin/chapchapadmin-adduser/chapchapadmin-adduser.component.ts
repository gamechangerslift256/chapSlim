import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ChapchapNotificationsService } from '../../shared/chapchap-notifications.service';

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
  roles: Role[] = [
    {value: 'ceo-0', viewValue: 'Chief executive officer'},
    {value: 'cfo-1', viewValue: 'Chief Finance Officer'},
    {value: 'coo-2', viewValue: 'Chief Operations Officer'},
    {value: 'cmo-3', viewValue: 'Chief manufacturing Officer'},
    {value: 'gmo-4', viewValue: 'General Manager Operations'},
    {value: 'gmf-5', viewValue: 'General Manager Finance'},
    {value: 'gms-6', viewValue: 'General Manager System'},
    {value: 'msm-7', viewValue: 'Marketing and Sales Manager'},
    {value: 'im-8', viewValue: 'Inventory Manager'},
    {value: 'hrm-0', viewValue: 'Human Resource Manager'},
    {value: 'rdm-0', viewValue: 'Research and Development Manager'},
    {value: 'om-0', viewValue: 'Operations Manager'},
    {value: 'sa-0', viewValue: 'Senior Accountant'},
    {value: 'aa-0', viewValue: 'Assistant Accountant'},
    {value: 'asm-0', viewValue: 'Area Sales Manager'},
    {value: 'hra-0', viewValue: 'Human Resource Assistant'},
    {value: 's-0', viewValue: 'Sales'},
    {value: 'm-0', viewValue: 'Marketing'},

  ];

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

}
