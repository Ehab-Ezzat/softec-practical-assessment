import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CartService} from "../services/cart.service";
import {Product} from "../interfaces/product";

@Component({
  selector: 'cart-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  template: `
      <hr class="my-4">
      <div class="row gap-y-1 mb-4 d-flex justify-content-between align-items-center">
          <div class="col-md-2 col-lg-2 col-xl-2">
              <img [src]="product.ProductImg" class="img-fluid rounded-3" alt="Cotton T-shirt">
          </div>
          <div class="col-md-3 col-lg-3 col-xl-3">
              <h6 class="text-black mb-0">{{product.ProductName}}</h6>
          </div>
          <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
              <input min="1" name="quantity" value="1" type="number" class="form-control form-control-sm" [(ngModel)]="product.quantity" (input)="cartService.changeQuantity(product)"/>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h6 class="mb-0">{{product.ProductPrice | currency}}</h6>
          </div>
          <div class="col-md-1 col-lg-1 col-xl-1 text-end">
              <button class="btn btn-close" (click)="cartService.removeFromCart(product)"></button>
          </div>
      </div>
  `,
  styles: []
})
export class CartProductsComponent {
  @Input() product!: Product;
  cartService = inject(CartService)
}
