import {EventEmitter, Injectable} from '@angular/core';
import {CartResult} from "../model/cart-result";
import {Product} from "../model/product";
import {Contact} from "../model/contact";
import {AdminSalesOrder} from "../model/admin/admin-sales-order";
import {Observable} from "rxjs/Observable";
import {RestService} from "./rest.service";

@Injectable()
export class CartService {

  public cardIsOpenedChanges: EventEmitter<boolean>;
  public cartResultChanges: EventEmitter<CartResult>;
  public adminNewSalesOrders = new EventEmitter<AdminSalesOrder[]>();

  private opened: boolean = false;
  private addItemsToCartUrl = 'quote/addOrdersToSalesOrder';
  private changeCountOfItemsFromCartUrl = 'quote/changeCountOfItemsFromSalesOrder';
  private deleteOrdersFormCartUrl = 'quote/deleteOrdersFormSalesOrder';
  private cleanCartUrl = 'quote/cleanSalesOrder';
  private getSalesOrderInfoUrl = 'quote/getSalesOrderInfo';
  private summitOrderUrl = 'quote/submitOrder';
  private salesOrdersByStatus = 'quote/getSalesOrdersByStatus';
  private changeSalesOrderStatusURL = 'quote/changeSalesOrderStatus';

  public salesOrderNewStatus: number = 0;
  public salesOrderAnsweredStatus: number = 1;
  public salesOrderTransitStatus: number = 2;
  public salesOrderFinishStatus: number = 3;
  public salesOrderCanceledStatus: number = 4;


  private cartResult:CartResult;

  constructor(private restService: RestService) {
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
    this.restService.get<CartResult>(this.addItemsToCartUrl,  id + "/" + count).subscribe(data => {
      this.cartResult = data;
      this.cartResultChanges.emit(this.cartResult);
    });
  }

  changeCountOfItemsFromCart(product:Product, count: number) : void {
    this.restService.get<CartResult>(this.changeCountOfItemsFromCartUrl , product.id + "/" + count).subscribe(data => {
      this.cartResult = data;
      this.cartResultChanges.emit(this.cartResult);
    });

  }

  deleteProductFromCart(product:Product) : void {
    this.restService.get<CartResult>(this.deleteOrdersFormCartUrl , product.id).subscribe(data => {
      this.cartResult = data;
      this.cartResultChanges.emit(this.cartResult);
    });
  }

  cleanCart() : void {
    this.restService.get<CartResult>(this.cleanCartUrl).subscribe(data => {
      this.cartResult = data;
      this.cartResultChanges.emit(this.cartResult);
    });
  }

  getSalesOrderInfo() : void {
    this.restService.get<CartResult>(this.getSalesOrderInfoUrl).subscribe(data => {
      this.cartResult = data;
      this.cartResultChanges.emit(this.cartResult);
    });
  }

  submitOrder(contact:Contact) : void  {
     this.restService.post<CartResult>(this.summitOrderUrl, contact).subscribe(data => {
      this.cartResult = data;
      this.cartResultChanges.emit(this.cartResult);
    });
  }


  getSalesOrdersByStatus(status:number) : Observable<AdminSalesOrder[]> {
    return this.restService.get<AdminSalesOrder[]>(this.salesOrdersByStatus , status);
  }

  getAdminNewSalesOrders() : void {
     this.getSalesOrdersByStatus(0).subscribe(data => {
       this.adminNewSalesOrders.next(data);
     });
  }

  changeSalesOrderStatus(salesOrderId: number, status:number) : void {
    this.restService.post(this.changeSalesOrderStatusURL, {salesOrderId: salesOrderId, status: status}).subscribe();
  }
}
