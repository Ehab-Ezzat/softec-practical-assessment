import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsService} from "../../core/services/products.service";
import {Product} from "../../core/interfaces/product";
import {Observable} from "rxjs";
import {ProductCardComponent} from "../../core/components/product-card.component";
import {CartService} from "../../core/services/cart.service";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productsService = inject(ProductsService);
  products$: Observable<Product[]> = this.productsService.getAllProducts();
  cartService = inject(CartService);

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
