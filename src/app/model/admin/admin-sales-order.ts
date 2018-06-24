import {CartItem} from "../cart-item";
import {Contact} from "../contact";

export class AdminSalesOrder {
  constructor(
    public id:number,
    public count: number,
    public status: number,
    public cartItems: CartItem[],
    public fullPrice: number,
    public contact: Contact
  ){}
}
