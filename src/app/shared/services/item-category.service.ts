import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ItemCategory } from '../models/category';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemCategoryService {

  private readonly url = 'https://www.json-generator.com/api/json/get/cpeIjFqwde';

  constructor(private http: HttpClient) { }

  getAllItemCategories(): Observable<ItemCategory[]> {
    return this.http.get<ItemCategory[]>(this.url)
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
