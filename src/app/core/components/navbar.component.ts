import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";

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
              <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                  <ul class="navbar-nav">
                      <li class="nav-item">
                          <a class="nav-link" aria-current="page" routerLink="/products" routerLinkActive="active">Products</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" aria-current="page" routerLink="/orders" routerLinkActive="active">Orders</a>
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

}
