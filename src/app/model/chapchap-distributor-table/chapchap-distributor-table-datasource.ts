import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ChapchapDistributorTableItem {
  name: string;
  location: string;
  id: number;
}

// TODO: replace this with real data from your application

// const EXAMPLE_DATA: ChapchapDistributorTableItem[] = [];


const EXAMPLE_DATA: ChapchapDistributorTableItem[] = [
  {id: 1, name: 'Ali Kabuye', location: 'Kampala'},
  { id: 2, name: 'Mwiru Amos', location: 'Jinja'},
  { id: 3, name: 'Atim Patricia', location: 'Arua'},
  { id: 4, name: 'Kahunde Brenda', location: 'Masindi'},
  { id: 5, name: 'Ofwono Janet', location: 'Tororo'},
  { id: 6, name: 'Nakachwa Betty', location: 'Rakai'},
  { id: 7, name: 'Opio Jimmy', location: 'Soroti'},
  { id: 8, name: 'Batte Morris', location: 'Buikwe'},
  { id: 9, name: 'Assimwe Gift', location: 'Fort Portal'},
  { id: 10, name: 'Agaba Edward', location: 'Kampala'},
  { id: 11, name: 'Kigozi Daniel', location: 'Mpigi'},
  { id: 12, name: 'Atugonza Edith', location: 'Gulu'},
  { id: 13, name: 'Ocen Mark Jones', location: 'Nebbi'},
  { id: 14, name: 'Onyango Rooney', location: 'Kampala'},
  { id: 15, name: 'Nakaggwa Annet', location: 'Masaka'},
  { id: 16, name: 'Apio Mercy', location: 'Omoro'},
  { id: 17, name: 'Owori Fletcher', location: 'Busia'},
  { id: 18, name: 'Ssebweteme Kizito', location: 'Nakaseke'},
  { id: 19, name: 'Ainebyona Mark', location: 'Mbarara'},
  { id: 20, name: 'Ongwen Lokeris', location: 'Kotido'},
];

/**
 * Data source for the ChapchapDistributorTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ChapchapDistributorTableDataSource extends DataSource<ChapchapDistributorTableItem> {
  data: ChapchapDistributorTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ChapchapDistributorTableItem[]> {
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
  private getPagedData(data: ChapchapDistributorTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ChapchapDistributorTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'location': return compare(a.location, b.location, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }

  private getFilteredData(data: ChapchapDistributorTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  public deleteData(data: ChapchapDistributorTableItem[], value) {
    return arrayRemove(data, value);
  }

}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

function arrayRemove(data: ChapchapDistributorTableItem[], value) {

  return data.filter(function(ele) {
       return ele !== value;
   });

}
