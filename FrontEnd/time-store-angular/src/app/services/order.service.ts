import { Injectable } from '@angular/core';

import { Observable, throwError, Subject } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

import { Order } from 'src/app/Order';



@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient,) { }




  addOrder(order: Order): void{
   

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
       });
  
      let options = { headers: headers };



    

    this.http.post('http://localhost:3000/orders', JSON.stringify(order),  options )
    .pipe(
      catchError((e)=>{
        return throwError(e);
      }))
      .subscribe(
        (data) => {
          console.log(data);
         alert('Request Sucessful');
        }
      )






    
  }


}
