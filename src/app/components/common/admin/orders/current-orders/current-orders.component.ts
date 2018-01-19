import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../../../services/cart.service";
import {AdminSalesOrder} from "../../../../../model/admin/admin-sales-order";

@Component({
  selector: 'app-current-orders',
  templateUrl: './current-orders.component.html',
  styleUrls: ['./current-orders.component.scss']
})
export class CurrentOrdersComponent implements OnInit {

  adminSalesOrders: AdminSalesOrder[];


  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getSalesOrdersByStatus(0).subscribe(data => this.adminSalesOrders = data);
  }



}
