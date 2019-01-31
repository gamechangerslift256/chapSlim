import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ChapchapRevenueTableItem {
  name: string;
  id: number;
  date: Date;
  revenue: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ChapchapRevenueTableItem[] = [
  { id: 1, name: 'Ali Kabuye', date: new Date(), revenue: 150000 },
  { id: 2, name: 'Mwiru Amos', date: new Date(), revenue: 6000000 },
  { id: 3, name: 'Atim Patricia', date: new Date(), revenue: 741000 },
  { id: 4, name: 'Kahunde Brenda', date: new Date(), revenue: 456000 },
  { id: 5, name: 'Ofwono Janet', date: new Date(), revenue: 123000 },
  { id: 6, name: 'Nakachwa Betty', date: new Date(), revenue: 7050000 },
  { id: 7, name: 'Opio Jimmy', date: new Date(), revenue: 780000 },
  { id: 8, name: 'Batte Morris', date: new Date(), revenue: 9510000 },
  { id: 9, name: 'Assimwe Gift', date: new Date(), revenue: 8000000 },
  { id: 10, name: 'Agaba Edward', date: new Date(), revenue: 51500000 },
  { id: 11, name: 'Kigozi Daniel', date: new Date(), revenue: 4150000 },
  { id: 12, name: 'Atugonza Edith', date: new Date(), revenue: 6150000 },
  { id: 13, name: 'Ocen Mark Jones', date: new Date(), revenue: 8150000 },
  { id: 14, name: 'Onyango Rooney', date: new Date(), revenue: 2500000 },
  { id: 15, name: 'Nakaggwa Annet', date: new Date(), revenue: 4000000 },
  { id: 16, name: 'Apio Mercy', date: new Date(), revenue: 3000000 },
  { id: 17, name: 'Owori Fletcher', date: new Date(), revenue: 800000 },
  { id: 18, name: 'Ssebweteme Kizito', date: new Date(), revenue: 900000 },
  { id: 19, name: 'Ainebyona Mark', date: new Date(), revenue: 5780000 },
  { id: 20, name: 'Ongwen Lokeris', date: new Date(), revenue: 200000 },
];

/**
 * Data source for the ChapchapRevenueTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ChapchapRevenueTableDataSource extends DataSource<ChapchapRevenueTableItem> {
  data: ChapchapRevenueTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ChapchapRevenueTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ChapchapRevenueTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ChapchapRevenueTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'revenue': return compare(a.revenue, b.revenue, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
