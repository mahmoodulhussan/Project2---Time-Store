
import { Watch } from 'src/app/Watch';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Order } from 'src/app/Order';
import { OrderService } from 'src/app/services/order.service';


import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {






@Input() watch:Watch = { 
  id:0,
  name: "",
  price:0,
  description: ""
};

userId:number = 0 ;



performOnbuy():void {
  const idJson =  this.localStorageService.getItem('id');
   const userId = idJson !== null ? JSON.parse(idJson) : 0;
  
  
  const order:Order = {
      user : userId     ,//  if user id is zero then no user in the local storage
      
      watch : this.watch.id
  }
  
  this.OrderService.addOrder(order);
  console.log('button work')
 }

  constructor( private localStorageService:LocalStorageService,  private OrderService:OrderService) { }

  ngOnInit(): void {
  }

}
