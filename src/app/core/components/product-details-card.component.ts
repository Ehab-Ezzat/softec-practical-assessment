import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExtendedProduct} from "../interfaces/order-details";

@Component({
  selector: 'product-details-card',
  standalone: true,
  imports: [CommonModule],
  template: `
      <div class="product-card p-3 border rounded mb-3">
          <div class="row align-items-center text-sm-start text-center gap-y">
              <div class="col-sm-3">
                  <img [src]="product.ProductImg" [alt]="product.ProductName + ' image'" width="130">
              </div>
              <div class="col-sm-3">
                  <p>{{product.ProductName}}</p>
              </div>
              <div class="col-sm-3">
                  <p>Qty: {{product.Quantity}}</p>
              </div>
              <div class="col-sm-3">
                  <p>{{product.ProductPrice | currency}}</p>
              </div>
          </div>
      </div>
  `,
  styles: [`
    img {
      max-width: 100%;
    }
  `]
})
export class ProductDetailsCardComponent {
  @Input() product!: ExtendedProduct;
}
