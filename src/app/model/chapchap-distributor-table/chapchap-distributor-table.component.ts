import { AlertsService } from './../../shared/alerts.service';
import { ChapchapDialogService } from './../../shared/chapchap-dialog.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ChapchapDistributorTableDataSource } from './chapchap-distributor-table-datasource';
import { ChapchapDistributorAddnewComponent } from './../../shared/chapchap-distributor-addnew/chapchap-distributor-addnew.component';
import { ChapchapNotificationsService } from '../../shared/chapchap-notifications.service';
import { ChapchapDistributorDetailComponent } from './../../shared/chapchap-distributor-detail/chapchap-distributor-detail.component';
@Component({
  selector: 'app-chapchap-distributor-table',
  templateUrl: './chapchap-distributor-table.component.html',
  styleUrls: ['./chapchap-distributor-table.component.scss']
})
export class ChapchapDistributorTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ChapchapDistributorTableDataSource;
  searchKey: string;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'location', 'actions' ];

  constructor(
                public dialog: MatDialog,
                private dialogService: ChapchapDialogService,
        //        private messageService: AlertsService,
                private notificationService: ChapchapNotificationsService,
             //   public dialogRef: MatDialogRef<ChapchapDistributorTableComponent>,
              //  @Inject(MAT_DIALOG_DATA) public data: DialogData
             ) { }
/*
  onNoClick(): void {
    this.dialogRef.close();
  }
*/
  ngOnInit() {
    this.dataSource = new ChapchapDistributorTableDataSource(this.paginator, this.sort);
  }

 // Clear search input
  searchClear() {
    this.searchKey = '';
  }

  // Autofilter
  applyFilter() {
  //  this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  // create distributor
  onCreate() {
    const dialogRef = this.dialog.open(
                      ChapchapDistributorAddnewComponent,
                      {
                        width: '600px',
                        height: '320px',
                        autoFocus: true
                      }
                      );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    //  this.animal = result;
    });

  }

  onView() {
    const dialogRef = this.dialog.open(
      ChapchapDistributorDetailComponent,
      {
        width: '600px',
        height: '320px',
        autoFocus: true,
       /* data: {

        }*/
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      //  this.animal = result;
    });

  }

  // Delete specified distributor
  onDelete(id) {
    console.log(id);
    this.dialogService.openConfirmDialog('Are you sure you want to delete this record?')
    .afterClosed().subscribe( res => {
      if ( res ) {
        this.dataSource.deleteData(this.dataSource.data, id);
      //  this.messageService.add('Record deleted!');
        this.notificationService.warn('! Deleted successfully');
      }
    });
  }

}
