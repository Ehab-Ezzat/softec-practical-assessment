import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Product} from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Product[]>([])
  totalPrice = new BehaviorSubject<number>(0)

  constructor(private http: HttpClient) {
  }

  addToCart(product: any) {
    // if the product is already in the cart, don't add it again
    if (this.cart.value.find(p => p.ProductId === product.ProductId)) {
      return;
    }
    this.cart.next([...this.cart.value, {...product, quantity: 1}]);
    this.calcTotalPrice()
  }

  removeFromCart(product: any) {
    this.cart.next(this.cart.value.filter(p => p.ProductId !== product.ProductId));
    this.calcTotalPrice()
  }

  calcTotalPrice() {
    this.totalPrice.next(this.cart.value.reduce((acc: any, product: any) => acc + (product.ProductPrice * product.quantity), 0));
  }

  changeQuantity(product: any) {
    const cart = this.cart.value;
    const index = cart.findIndex(p => p.ProductId === product.ProductId);
    cart[index].quantity = product.quantity;
    this.cart.next(cart);
    this.calcTotalPrice()
  }

  addOrder(data: any) {
    return this.http.post(`https://softec.com/api/AddOrder`, data)
  }
}
