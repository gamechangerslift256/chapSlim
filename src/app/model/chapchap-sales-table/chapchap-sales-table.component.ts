import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { EXAMPLE_DATA } from './chapchap-sales-table-datasource';

@Component({
  selector: 'app-chapchap-sales-table',
  templateUrl: './chapchap-sales-table.component.html',
  styleUrls: ['./chapchap-sales-table.component.scss']
})
export class ChapchapSalesTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource(EXAMPLE_DATA);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'sales', 'date'];

  ngOnInit() {
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
              }

  // Filter the table
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
