import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartService} from "../../core/services/cart.service";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CartProductsComponent} from "../../core/components/cart-products.component";
import {CartSummaryComponent} from "../../core/components/cart-summary/cart-summary.component";

@Component({
  selector: 'cart',
  standalone: true,
  imports: [CommonModule, CartProductsComponent, CartSummaryComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartService = inject(CartService);
  cartForm!: FormGroup;
  router = inject(Router);

  orderNow() {
    if (this.cartForm.valid) {
      let data = {
        products: this.cartService.cart.value.map(product => {
          return {
            productId: product.ProductId,
            quantity: product.quantity
          }
        }),
        totalPrice: this.cartService.totalPrice.value,
        paymentMethod: this.cartForm.value.paymentMethod,
        userId: this.cartForm.value.userId
      }

      this.cartService.addOrder(data).subscribe((res: any) => {
        if (res.success) {
          this.cartService.cart.next([]);
          this.cartService.totalPrice.next(0);
          this.cartForm.reset();
          this.router.navigate(['/']);
        }
      })
    } else {
      this.cartForm.markAllAsTouched();
    }
  }
}
