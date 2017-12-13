import {ProductType} from "./product-type";
import {Technology} from "./technology";
import {Category} from "./category";
import {Material} from "./material";
import {BundleChild} from "./bundle-child";

export class Bundle {
  constructor(
    public id: number,
    public name: string,
    public size: string,
    public image: string,
    public bundleImage: string,
    public price: number,
    public description: string,
    public productType: ProductType,
    public technologies: [Technology],
    public categories: [Category],
    public materials: [Material],
    public childItems:[BundleChild]
  ){}
}
