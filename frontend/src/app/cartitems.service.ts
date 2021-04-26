import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CartItem } from './cartItem';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class CartitemsService {

  private serverCartUrl = 'http://localhost:2130/shoppingcart'

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  cartItems$ = new Subject<CartItem[]>()

  constructor(private http: HttpClient) { }

  cartModalVisible: { visible: boolean } = { visible: false }

  toggleModalVisibility (visible?: boolean) {
    this.cartModalVisible.visible = visible === undefined ? !this.cartModalVisible : visible
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T)
    }
  }

  getCartItems (): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.serverCartUrl)
      .pipe(
        tap((cartItems) => this.cartItems$.next(cartItems)),
        catchError(this.handleError('getCartItems', []))
      )
  }

  addItemToCart (item: Item): Observable<any> {
    return this.http.patch<any>(this.serverCartUrl, { item })
      .pipe(
        tap(),
        catchError(this.handleError('addItemToCart'))
      )
  }
}
