import {ProductType} from "./product-type";
import {Technology} from "./technology";
import {Category} from "./category";
import {Material} from "./material";
import {ProductColor} from "./product-color";
import {Product} from "./product"

export class LigthProduct {
  constructor(
    public id: number,
    public pr: number,
    public ig: string,
    public nm: string,
    public cg: [Category],
    public tg: [Technology],
    public ml: [Material],
    public pc: [ProductColor],
    public bg: string,
    public sz: string,
    public cd: Date,
  ){}

  public convertToProduct(): Product {
    return new Product(this.id, this.nm, this.sz, this.ig, this.pr, "", null, this.tg, this.cg, this.ml, this.pc, null, 0, this.bg, "" , this.cd)
  }
}
