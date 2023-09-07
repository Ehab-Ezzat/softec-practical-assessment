import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {OrdersService} from "../../core/services/orders.service";
import {Observable} from "rxjs";
import {CustomerDetailsCardComponent} from "../../core/components/customer-details-card.component";
import {ProductDetailsCardComponent} from "../../core/components/product-details-card.component";
import {OrderDetails} from "../../core/interfaces/order-details";

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule, CustomerDetailsCardComponent, ProductDetailsCardComponent],
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  orderId!: number;
  order$!: Observable<OrderDetails>;

  constructor(private route: ActivatedRoute, private ordersService: OrdersService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.orderId = parseInt(params['id']);
      this.order$ = this.ordersService.getOrderById(this.orderId);
    });
  }
}
