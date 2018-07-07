import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../../../services/cart.service";
import {AdminSalesOrder} from "../../../../../model/admin/admin-sales-order";

@Component({
  selector: 'app-current-orders',
  templateUrl: './current-orders.component.html',
  styleUrls: ['./current-orders.component.scss']
})
export class CurrentOrdersComponent implements OnInit {

  panelOpenState: boolean = false;
  productStatus: number = 0;

  adminSalesOrders: AdminSalesOrder[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.adminNewSalesOrders.subscribe(data => this.adminSalesOrders = data);
    this.cartService.getAdminNewSalesOrders();
  }

  changeStatus(salesOrder: AdminSalesOrder){
    this.cartService.changeSalesOrderStatus(salesOrder.id, this.productStatus);
    this.adminSalesOrders = this.adminSalesOrders.filter(adminSalesOrder => adminSalesOrder.id !== salesOrder.id);
  }

  refresh(){
    this.cartService.getAdminNewSalesOrders();
  }



}
