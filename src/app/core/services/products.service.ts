import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../interfaces/product";
import {map, Observable} from "rxjs";

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

}
