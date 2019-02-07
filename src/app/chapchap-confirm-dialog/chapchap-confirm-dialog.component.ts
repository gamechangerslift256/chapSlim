import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-chapchap-confirm-dialog',
  templateUrl: './chapchap-confirm-dialog.component.html',
  styleUrls: ['./chapchap-confirm-dialog.component.scss']
})
export class ChapchapConfirmDialogComponent implements OnInit {

  constructor(
                public dialogRef: MatDialogRef<ChapchapConfirmDialogComponent>,
                @Inject ( MAT_DIALOG_DATA ) public data
              ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

}
