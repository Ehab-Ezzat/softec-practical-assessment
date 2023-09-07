import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderDetails} from "../interfaces/order-details";

@Component({
  selector: 'customer-details-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3 class="mb-3">Customer Details</h3>
    <div class="customer-details p-3 border rounded">
      <p><span class="fw-bold">Name:</span> {{order.user.Name}}</p>
      <p><span class="fw-bold">Address:</span> {{order.user.Address}}</p>
      <p><span class="fw-bold">Phone:</span> {{order.user.Phone}}</p>
      <p><span class="fw-bold">Email:</span> {{order.user.Email}}</p>
      <p><span class="fw-bold">Order Date:</span> {{order.OrderDate | date}}</p>
      <p><span class="fw-bold">Payment Type:</span> {{order.PaymentType}}</p>
    </div>
  `,
  styles: [`
    .customer-details p:not(:last-child) {
      margin-bottom: 10px !important;
    }
  `]
})
export class CustomerDetailsCardComponent {
  @Input() order!: OrderDetails;
}
