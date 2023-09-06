import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">Softec</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse align-items-center justify-content-end" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" routerLink="/products" routerLinkActive="active">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" routerLink="/orders" routerLinkActive="active">Orders</a>
            </li>
            <li class="nav-item">
              <a class="nav-link line-height" aria-current="page" routerLink="/cart" routerLinkActive="active">
                <button class="btn p-0 position-relative">
                  <i class="bi bi-cart3 fs-4 line-height"></i>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" *ngIf="cartService.cart.value.length > 0">
                                {{cartService.cart.value.length}}
                              </span>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [
  ]
})
export class NavbarComponent {
  cartService = inject(CartService)
}
