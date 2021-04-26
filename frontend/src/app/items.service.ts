import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from "rxjs/operators";
import { Observable, of, Subject } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private serverUrl = 'http://localhost:2130'

  items$ = new Subject<Item[]>()

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T)
    }
  }

  getItems (): Observable<Item[]> {
    return this.http.get<Item[]>(this.serverUrl)
      .pipe(
        tap((items) => this.items$.next(items)),
        catchError(this.handleError('getItems', []))
      )
  }

  getItem (productName: string, isFixedName: boolean = false): Observable<Item> {
    return this.http.get<Item>(`${this.serverUrl}/${productName}?isFixedName=${isFixedName}`)
      .pipe(
        catchError(this.handleError<Item>('getItem'))
      )
  }
}
