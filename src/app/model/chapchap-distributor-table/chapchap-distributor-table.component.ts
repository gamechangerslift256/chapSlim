import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { ChapchapDistributorTableDataSource } from './chapchap-distributor-table-datasource';
import { ChapchapDistributorAddnewComponent } from './../../shared/chapchap-distributor-addnew/chapchap-distributor-addnew.component';

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

  constructor (
                private dialog: MatDialog
              ) {}

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
    this.dialog.open(ChapchapDistributorAddnewComponent);
  }

}
