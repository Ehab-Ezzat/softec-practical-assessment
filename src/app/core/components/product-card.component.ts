import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from "../interfaces/product";
import {CartService} from '../services/cart.service';

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
        <div class="d-flex justify-content-between mt-2">
          <div class="d-flex align-items-center gap-1">
            <p class="fw-bold">Available: </p>
            <p class="rounded px-2 text-white" [ngClass]="{
                       'bg-secondary': product.AvailablePieces === 0,
                       'bg-danger': product.AvailablePieces > 0 && product.AvailablePieces <= 10 ,
                       'bg-warning': product.AvailablePieces > 10 && product.AvailablePieces <= 50,
                       'bg-success': product.AvailablePieces > 50,
                       }">{{product.AvailablePieces || 'Unavailable'}}</p>
          </div>

          <button (click)="addToCart(product)" class="btn p-0 line-height" *ngIf="product.AvailablePieces > 0">
            <i class="bi bi-cart-plus fs-2 text-info" *ngIf="!productAdded(product)"></i>
            <i class="bi bi-cart-check fs-2 text-success" *ngIf="productAdded(product)"></i>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() addedToCart = new EventEmitter();
  cartService = inject(CartService);

  addToCart(product: Product) {
    this.addedToCart.emit(product);
  }

  productAdded(product: Product) {
    //   check if the product is already in the cart or not
    return !!this.cartService.cart.value.find(p => p.ProductId === product.ProductId);
  }
}
