import {AdminBundleProductItem} from "./admin-bundle-product-item";

export class AdminProduct {
  constructor(
    public id: number,
    public russianName: string,
    public englishName: string,
    public ukrainianName: string,
    public price: number,
    public isBundle : boolean,
    public size: string,
    public technologyIDs: number[],
    public russianDescription: string,
    public englishDescription: string,
    public ukrainianDescription: string,
    public categoryIDs: number[],
    public productTypeID : number,
    public materialIDs: number[],
    public productColorIDs: number[],
    public popular: number,
    public imagePresentation: number,
    public images: string[],
    public image : string,
    public bundleImage: string,
    public bundleProductItems: AdminBundleProductItem[] = [],
    public background: string,
    public articul:string,
    public visible: number
  ){}
}
