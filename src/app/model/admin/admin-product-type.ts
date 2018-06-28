export class AdminProductType {
  constructor(
    public id: number,
    public nameRU: string,
    public nameEN: string,
    public nameUA: string,
    public imageURL: string,
    public background: string,
    public visible: number = 1
  ){}
}
