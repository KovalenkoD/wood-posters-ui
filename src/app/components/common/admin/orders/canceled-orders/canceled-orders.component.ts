import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../../../services/cart.service";
import {AdminSalesOrder} from "../../../../../model/admin/admin-sales-order";

@Component({
  selector: 'app-canceled-orders',
  templateUrl: './canceled-orders.component.html',
  styleUrls: ['./canceled-orders.component.scss']
})
export class CanceledOrdersComponent implements OnInit {

  newOrders: number = 5;
  panelOpenState: boolean = false;
  productStatus: number = 0;

  adminSalesOrders: AdminSalesOrder[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.adminCanceledSalesOrders.subscribe(data => this.adminSalesOrders = data);
    this.cartService.getAdminCanceledSalesOrders();
  }

  changeStatus(salesOrder: AdminSalesOrder){
    this.cartService.changeSalesOrderStatus(salesOrder.id, this.productStatus);
    this.adminSalesOrders = this.adminSalesOrders.filter(adminSalesOrder => adminSalesOrder.id !== salesOrder.id);
  }

  refresh(){
    this.cartService.getAdminCanceledSalesOrders();
  }



}
