import {Product} from "./product";

export class BundleChild {
  constructor(
    public id: number,
    public x_coordinate: number,
    public y_coordinate: number,
    public product: Product,
    public active: boolean
  ){}
}
