import {Injectable} from '@angular/core';
import {forkJoin, map, Observable, switchMap} from "rxjs";
import {Order} from "../interfaces/order";
import {HttpClient} from "@angular/common/http";
import {Product} from "../interfaces/product";
import {ProductsService} from "./products.service";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient, private productsService: ProductsService) {
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<any[]>('../../assets/db/orders.json').pipe(
      switchMap((orders: any[]) => {
        // get All Product IDs
        const productIds = orders.flatMap(order => order.Products.map((product: any) => product.ProductId));

        // get All Products by productIds to get the total price of each order and add it to the order object
        return forkJoin(productIds.map(productId => this.productsService.getProductById(productId)))
          .pipe(map((products: Product[]) => {
              orders.map(order => {
                let totalOrderPrice = 0;

                order.Products.map((product: any) => {

                  const productDetail: any = products.find((p: Product) => p.ProductId === product.ProductId);

                  totalOrderPrice += productDetail.ProductPrice * product.Quantity;
                });
                order.TotalPrice = totalOrderPrice;
              });
              return orders;
            })
          );
      })
    );
  }
}
