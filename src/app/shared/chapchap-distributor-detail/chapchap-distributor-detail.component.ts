import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-chapchap-distributor-detail',
  templateUrl: './chapchap-distributor-detail.component.html',
  styleUrls: ['./chapchap-distributor-detail.component.scss']
})
export class ChapchapDistributorDetailComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ChapchapDistributorDetailComponent>
              ) { }

  ngOnInit() {
  }

}
