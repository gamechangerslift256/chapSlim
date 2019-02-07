import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ChapchapRevenueTableItem {
  name: string;
  id: number;
  date: string;
  revenue_yesterday: number;
  revenue_today: number;
  change: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ChapchapRevenueTableItem[] = [
  { id: 1, name: 'Ali Kabuye', date: new Date().toLocaleString(), revenue_yesterday: 150000, revenue_today: 150000, change: 18},
  { id: 2, name: 'Mwiru Amos', date: new Date().toLocaleString(), revenue_yesterday: 6000000, revenue_today: 150000, change: 23 },
  { id: 3, name: 'Atim Patricia', date: new Date().toLocaleString(), revenue_yesterday: 741000, revenue_today: 150000, change: 27 },
  { id: 4, name: 'Kahunde Brenda', date: new Date().toLocaleString(), revenue_yesterday: 456000, revenue_today: 150000, change: 15 },
  { id: 5, name: 'Ofwono Janet', date: new Date().toLocaleString(), revenue_yesterday: 123000, revenue_today: 150000, change: 0 },
  { id: 6, name: 'Nakachwa Betty', date: new Date().toLocaleString(), revenue_yesterday: 7050000, revenue_today: 150000, change: 2 },
  { id: 7, name: 'Opio Jimmy', date: new Date().toLocaleString(), revenue_yesterday: 780000, revenue_today: 150000, change: 9 },
  { id: 8, name: 'Batte Morris', date: new Date().toLocaleString(), revenue_yesterday: 9510000, revenue_today: 150000, change: 38 },
  { id: 9, name: 'Assimwe Gift', date: new Date().toLocaleString(), revenue_yesterday: 8000000, revenue_today: 150000, change: 78 },
  { id: 10, name: 'Agaba Edward', date: new Date().toLocaleString(), revenue_yesterday: 51500000, revenue_today: 150000, change: 91 },
  { id: 11, name: 'Kigozi Daniel', date: new Date().toLocaleString(), revenue_yesterday: 4150000, revenue_today: 150000, change: 80 },
  { id: 12, name: 'Atugonza Edith', date: new Date().toLocaleString(), revenue_yesterday: 6150000, revenue_today: 150000, change: 73 },
  { id: 13, name: 'Ocen Mark Jones', date: new Date().toLocaleString(), revenue_yesterday: 8150000, revenue_today: 150000, change: 64 },
  { id: 14, name: 'Onyango Rooney', date: new Date().toLocaleString(), revenue_yesterday: 2500000, revenue_today: 150000, change: 87 },
  { id: 15, name: 'Nakaggwa Annet', date: new Date().toLocaleString(), revenue_yesterday: 4000000, revenue_today: 150000, change: 59 },
  { id: 16, name: 'Apio Mercy', date: new Date().toLocaleString(), revenue_yesterday: 3000000, revenue_today: 150000, change: 48 },
  { id: 17, name: 'Owori Fletcher', date: new Date().toLocaleString(), revenue_yesterday: 800000, revenue_today: 150000, change: 45 },
  { id: 18, name: 'Ssebweteme Kizito', date: new Date().toLocaleString(), revenue_yesterday: 900000, revenue_today: 150000, change: 5 },
  { id: 19, name: 'Ainebyona Mark', date: new Date().toLocaleString(), revenue_yesterday: 5780000, revenue_today: 150000, change: 31 },
  { id: 20, name: 'Ongwen Lokeris', date: new Date().toLocaleString(), revenue_yesterday: 200000, revenue_today: 150000, change: 25 },
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
        case 'revenue_yesterday': return compare(a.revenue_yesterday, b.revenue_yesterday, isAsc);
        case 'revenue_today': return compare(a.revenue_today, b.revenue_today, isAsc);
        case 'change': return compare(a.change, b.change, isAsc);
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
