import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ChapchapRevenueTableDataSource } from './chapchap-revenue-table-datasource';

@Component({
  selector: 'app-chapchap-revenue-table',
  templateUrl: './chapchap-revenue-table.component.html',
  styleUrls: ['./chapchap-revenue-table.component.scss']
})
export class ChapchapRevenueTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ChapchapRevenueTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'date', 'revenue_yesterday', 'revenue_today', 'change'];

  ngOnInit() {
    this.dataSource = new ChapchapRevenueTableDataSource(this.paginator, this.sort);
  }
}
