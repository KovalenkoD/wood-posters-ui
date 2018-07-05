import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../../../services/cart.service";
import {AdminSalesOrder} from "../../../../../model/admin/admin-sales-order";

@Component({
  selector: 'app-answered-orders',
  templateUrl: './answered-orders.component.html',
  styleUrls: ['./answered-orders.component.scss']
})
export class AnsweredOrdersComponent implements OnInit {

  newOrders: number = 5;
  panelOpenState: boolean = false;
  productStatus: number = 0;

  adminSalesOrders: AdminSalesOrder[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.adminAnsweredSalesOrders.subscribe(data => this.adminSalesOrders = data);
    this.cartService.getAdminAnsweredSalesOrders();
  }

  changeStatus(salesOrder: AdminSalesOrder){
    this.cartService.changeSalesOrderStatus(salesOrder.id, this.productStatus);
    this.adminSalesOrders = this.adminSalesOrders.filter(adminSalesOrder => adminSalesOrder.id !== salesOrder.id);
  }

  refresh(){
    this.cartService.getAdminAnsweredSalesOrders();
  }



}
