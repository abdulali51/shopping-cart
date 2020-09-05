import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private readonly url = 'https://www.json-generator.com/api/json/get/bTYHqSgTTm';

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url)
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:',   errorResponse.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(`Status code : ${errorResponse.status}, Error: ${errorResponse.error}`);
    }
    // return an observable with a error message
    return throwError('Error Occurred; please try again later.');
  }
}
