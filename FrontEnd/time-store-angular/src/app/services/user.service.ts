import { Injectable } from '@angular/core';
import { User } from '../User';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User = {
    id:0,
    email: "",
    password:""
  }

  login( email:String, password:String) : Observable<User>{
    return this.http.post<User>("http://localhost:3000/login", JSON.stringify({ email, password}))
    .pipe(catchError((e)=>{
      return throwError(e);
    }));
 
  }

  constructor(private http: HttpClient) { }
}
