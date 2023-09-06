import {Product} from "./product"

export interface OrderDetails {
  OrderId: number;
  OrderDate: string;
  UserId: string;
  Products: ExtendedProduct[];
  PaymentType: string;
  user: {
    Id: string;
    Name: string;
    Email: string;
    Phone: string;
    Address: string;
    RegisterDate: string;
  }
  TotalPrice: number;
}

export interface ExtendedProduct extends Product {
  Quantity: number;
}
