import { Injectable } from '@angular/core';
import { Watch } from '../Watch';

import { Observable, throwError, Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})




export class WatchService {

  watches: Watch[] = [];
  subject: Subject< Watch[]> = new Subject< Watch[]>();

  //might add the user service inside the constructor 
  //adding user service in the constructor to amke uservice available in this class
  //to get the user id to get the saved wishlist(the watch item added to wishlist but not being bought yet) store in local service
  constructor( private http: HttpClient  ) { }
  getWatches(){
    this.http.get<Watch[]>('http://localhost:3000/watches')
    .pipe(
      catchError((e)=> {
        return throwError(e);
      }))
      .subscribe(
        (data) => {
          this.watches = data;
          console.log(data)
          this.subject.next(this.watches);
        }
      )
  }


}
