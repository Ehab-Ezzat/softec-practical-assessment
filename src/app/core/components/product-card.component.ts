import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from "../interfaces/product";

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <img [src]="product.ProductImg" class="card-img-top" [alt]="product.ProductName + ' image'">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h5 class="card-title">{{product.ProductName}}</h5>
          <p>{{product.ProductPrice | currency}}</p>
        </div>

        <div class="d-flex align-items-center gap-1 mt-1">
          <p class="fw-bold">Available: </p>
          <p class="rounded px-2 text-white" [ngClass]="{
              'bg-secondary': product.AvailablePieces === 0,
             'bg-danger': product.AvailablePieces > 0 && product.AvailablePieces <= 10 ,
             'bg-warning': product.AvailablePieces > 10 && product.AvailablePieces <= 50,
             'bg-success': product.AvailablePieces > 50,
             }">{{product.AvailablePieces || 'Unavailable'}}</p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ProductCardComponent {
  @Input() product!: Product;
}
