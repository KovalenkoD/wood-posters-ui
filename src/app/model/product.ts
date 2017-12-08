import {ProductType} from "./product-type";
import {Technology} from "./technology";
import {Category} from "./category";
import {Material} from "./material";

export class Product {
  constructor(
    public id: number,
    public name: string,
    public size: string,
    public price: number,
    public description: string,
    public productTypes: [ProductType],
    public technologies: [Technology],
    public categories: [Category],
    public materials: [Material]
  ){}
}
