import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../../../services/cart.service";
import {AdminSalesOrder} from "../../../../../model/admin/admin-sales-order";

@Component({
  selector: 'app-on-the-way-orders',
  templateUrl: './on-the-way-orders.component.html',
  styleUrls: ['./on-the-way-orders.component.scss']
})
export class OnTheWayOrdersComponent implements OnInit {

  newOrders: number = 5;
  panelOpenState: boolean = false;
  productStatus: number = 0;

  adminSalesOrders: AdminSalesOrder[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.adminOnTheWaySalesOrders.subscribe(data => this.adminSalesOrders = data);
    this.cartService.getAdminOnTheWaySalesOrders();
  }

  changeStatus(salesOrder: AdminSalesOrder){
    this.cartService.changeSalesOrderStatus(salesOrder.id, this.productStatus);
    this.adminSalesOrders = this.adminSalesOrders.filter(adminSalesOrder => adminSalesOrder.id !== salesOrder.id);
  }

  refresh(){
    this.cartService.getAdminOnTheWaySalesOrders();
  }



}
