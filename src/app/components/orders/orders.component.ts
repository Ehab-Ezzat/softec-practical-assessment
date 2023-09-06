import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Observable} from "rxjs";
import {Order} from "../../core/interfaces/order";
import {RouterLink} from "@angular/router";
import {OrdersService} from "../../core/services/orders.service";

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  ordersService = inject(OrdersService);
  orders$: Observable<Order[]> = this.ordersService.getAllOrders();
  protected readonly String = String;
}
