import {EventEmitter, Injectable} from '@angular/core';
import {CartResult} from "../model/cart-result";
import {Product} from "../model/product";
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CartService {

  public cardIsOpenedChanges: EventEmitter<boolean>;
  public cartResultChanges: EventEmitter<CartResult>;

  private opened: boolean = false;
  private addItemsToCartUrl = 'http://localhost:8080/quote/addOrdersToSalesOrder';
  private changeCountOfItemsFromCartUrl = 'http://localhost:8080/quote/changeCountOfItemsFromSalesOrder';
  private deleteOrdersFormCartUrl = 'http://localhost:8080/quote/deleteOrdersFormSalesOrder';
  private cleanCartUrl = 'http://localhost:8080/quote/cleanSalesOrder';
  private getSalesOrderInfoUrl = 'http://localhost:8080/quote/getSalesOrderInfo';

  private cartResult:CartResult;

  constructor(private http: HttpClient) {
    this.cardIsOpenedChanges = new EventEmitter();
    this.cartResultChanges = new EventEmitter();
    this.getSalesOrderInfo();
  }

  openCart() : void {
    this.opened = true;
    this.cardIsOpenedChanges.emit(this.opened);
  }

  closeCart() : void {
    this.opened = false;
    this.cardIsOpenedChanges.emit(this.opened);
  }

  isOpenCart() : boolean {
    return this.opened;
  }

  addProductToCart(id:number, count: number) : void {
    this.http.get<CartResult>(this.addItemsToCartUrl + "/" + id + "/" + count, { withCredentials: true }).subscribe(data => {
      this.cartResult = data;
      this.cartResultChanges.emit(this.cartResult);
    });
  }

  changeCountOfItemsFromCart(product:Product, count: number) : void {
    this.http.get<CartResult>(this.changeCountOfItemsFromCartUrl + "/" + product.id + "/" + count, { withCredentials: true }).subscribe(data => {
      this.cartResult = data;
      this.cartResultChanges.emit(this.cartResult);
    });

  }

  deleteProductFromCart(product:Product) : void {
    this.http.get<CartResult>(this.deleteOrdersFormCartUrl + "/" + product.id, { withCredentials: true }).subscribe(data => {
      this.cartResult = data;
      this.cartResultChanges.emit(this.cartResult);
    });
  }

  cleanCart() : void {
    this.http.get<CartResult>(this.cleanCartUrl, { withCredentials: true }).subscribe(data => {
      this.cartResult = data;
      this.cartResultChanges.emit(this.cartResult);
    });
  }

  getSalesOrderInfo() : void {
    this.http.get<CartResult>(this.getSalesOrderInfoUrl, { withCredentials: true }).subscribe(data => {
      this.cartResult = data;
      this.cartResultChanges.emit(this.cartResult);
    });
  }


}
