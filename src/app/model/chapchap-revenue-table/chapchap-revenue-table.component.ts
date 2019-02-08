import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { EXAMPLE_DATA } from './chapchap-revenue-table-datasource';

@Component({
  selector: 'app-chapchap-revenue-table',
  templateUrl: './chapchap-revenue-table.component.html',
  styleUrls: ['./chapchap-revenue-table.component.scss']
})
export class ChapchapRevenueTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource(EXAMPLE_DATA);


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'date', 'revenue_yesterday', 'revenue_today', 'change'];

  ngOnInit() {
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
             }

  // Filter the table
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 }
