import {ProductType} from "./product-type";
import {Technology} from "./technology";
import {Category} from "./category";
import {Material} from "./material";
import {ProductColor} from "./product-color";

export class Product {
  constructor(
    public id: number,
    public name: string,
    public size: string,
    public image: string,
    public price: number,
    public description: string,
    public productType: ProductType,
    public technologies: [Technology],
    public categories: [Category],
    public materials: [Material],
    public productColors: [ProductColor],
    public images: [string],
    public imagePresentation: number,
    public background: string,
    public articul:string,
    public createdDate:Date
  ){}
}
