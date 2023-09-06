import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {Order} from "../interfaces/order";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) {
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<any[]>('../../assets/db/orders.json').pipe(map((orders: any[]) => orders));
  }
}
