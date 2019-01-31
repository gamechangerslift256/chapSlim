import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ChapchapSalesTableDataSource } from './chapchap-sales-table-datasource';

@Component({
  selector: 'app-chapchap-sales-table',
  templateUrl: './chapchap-sales-table.component.html',
  styleUrls: ['./chapchap-sales-table.component.scss']
})
export class ChapchapSalesTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ChapchapSalesTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'sales', 'date'];

  ngOnInit() {
    this.dataSource = new ChapchapSalesTableDataSource(this.paginator, this.sort);
  }
}
