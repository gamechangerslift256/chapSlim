import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { ChapchapDialogService } from '../../shared/chapchap-dialog.service';
import { ChapchapNotificationsService } from '../../shared/chapchap-notifications.service';
import { ChapchapDistributorAddnewComponent } from '../../shared/chapchap-distributor-addnew/chapchap-distributor-addnew.component';
import { ChapchapDistributorDetailComponent } from '../../shared/chapchap-distributor-detail/chapchap-distributor-detail.component';
import {  EXAMPLE_DATA } from './chapchap-distributor-table-datasource';
import { ChapchaprestService } from '../../shared/chapchaprest.service';

@Component({
  selector: 'app-chapchap-distributor-list',
  templateUrl: './chapchap-distributor-list.component.html',
  styleUrls: ['./chapchap-distributor-list.component.scss']
})
export class ChapchapDistributorListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['id', 'name', 'location', 'actions'];
  searchKey: string;
  dataSource = new MatTableDataSource(EXAMPLE_DATA);
  distro: any = [];

  constructor(
                public dialog: MatDialog,
                private dialogService: ChapchapDialogService,
                private restService: ChapchaprestService,
                //        private messageService: AlertsService,
                private notificationService: ChapchapNotificationsService,
                //   public dialogRef: MatDialogRef<ChapchapDistributorTableComponent>,
                //  @Inject(MAT_DIALOG_DATA) public data: DialogData
              ) { }

  ngOnInit() {
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
    this.getDistributors();
              }

  getDistributors() {
    this.distro = [];
    this.restService.getDistributors().subscribe((data: {}) => {
      console.log(data);
      this.distro = data;
    });
  }

  // Filter the table
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Clear search input
  searchClear() {
    this.searchKey = '';
  }

  // create distributor
  onCreate() {
    const dialogRef = this.dialog.open(
      ChapchapDistributorAddnewComponent,
      {
        width: '600px',
        height: '400px',
        autoFocus: true
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      //  this.animal = result;
    });

  }

  onView(row) {
    const dialogRef = this.dialog.open(
      ChapchapDistributorDetailComponent,
      {
        width: '600px',
        height: '320px',
        autoFocus: true,
        data: {
                obj: row
         }
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
      .afterClosed().subscribe(res => {
        if (res) {
          // this.dataSource.deleteData(this.dataSource.data, id);
          //  this.messageService.add('Record deleted!');
          this.notificationService.warn('! Deleted successfully');
        }
      });
  }

}
