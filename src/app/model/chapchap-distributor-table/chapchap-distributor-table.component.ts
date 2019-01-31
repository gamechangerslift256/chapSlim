import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ChapchapDistributorTableDataSource } from './chapchap-distributor-table-datasource';

@Component({
  selector: 'app-chapchap-distributor-table',
  templateUrl: './chapchap-distributor-table.component.html',
  styleUrls: ['./chapchap-distributor-table.component.scss']
})
export class ChapchapDistributorTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ChapchapDistributorTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'location'];

  ngOnInit() {
    this.dataSource = new ChapchapDistributorTableDataSource(this.paginator, this.sort);
  }
}
