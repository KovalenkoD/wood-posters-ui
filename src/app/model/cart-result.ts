import {CartItem} from "./cart-item";

export class CartResult {
  constructor(
    public count: number,
    public cartItems: CartItem[],
    public fullPrice: number
  ){}
}
