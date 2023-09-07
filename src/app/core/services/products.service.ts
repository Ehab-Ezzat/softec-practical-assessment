import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../interfaces/product";
import {forkJoin, map, Observable} from "rxjs";
import {ExtendedProduct} from "../interfaces/order-details";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get('../../assets/db/products.json').pipe(map((res: any) => res));
  }

  getProductById(productId: number): Observable<Product> {
    return this.getAllProducts().pipe(map((products: any) => products.find((item: any) => item.ProductId === productId)))
  }

  getProductsInfo(productsInfo: any[]): Observable<ExtendedProduct[]> {
    const products$ = productsInfo.map((productInfo: any) => {
      const productId = productInfo.ProductId;
      const quantity = productInfo.Quantity;
      return this.getProductById(productId).pipe(
        map((product: any) => ({
          ...product,
          Quantity: quantity
        }))
      );
    });
    return forkJoin(products$);
  }

}
