
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ChapchaprestService {
  // various endpoints
   endpoint = 'http://127.0.0.1:8000/api/v1/';
  // endpoint = 'http://localhost:6000/';
  //  endpoint = 'https://jsonplaceholder.typicode.com/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200/distributors',
      'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Origin'
    })
  };

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  getDistributors(): Observable<any> {
    return this.http
      .get(this.endpoint + 'distributors/', {
        headers: this.httpOptions.headers
      })
      .pipe(map(this.extractData));
    /*
      return this.http.get(this.endpoint + 'users').pipe(
          map(this.extractData));
    */
  }

  // function to handle errors
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
