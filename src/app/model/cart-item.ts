import {Product} from "./product";

export class CartItem {
  constructor(
    public id:number,
    public count: number,
    public calculatedPrice: number,
    public product: Product
  ){}
}
