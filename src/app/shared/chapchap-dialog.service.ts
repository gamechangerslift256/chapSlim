import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ChapchapConfirmDialogComponent } from './../chapchap-confirm-dialog/chapchap-confirm-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class ChapchapDialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog (msg) {
    return this.dialog.open(ChapchapConfirmDialogComponent, {
      width: '250px',
      height: '150px',
      disableClose: true,
      data : {
        message: msg
      }
    });
  }

}
