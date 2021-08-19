import { Injectable } from '@angular/core';
import { User } from '../User';
import {HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User = {
    id:0,
    firstName: "",
    lastName: "",
    email: "",
    password:""
  }

  login( email:string, password:string) : Observable<any>{

    let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>("http://localhost:3000/login", JSON.stringify({ email,  password}) ,{headers}  )
    .pipe(catchError((e)=>{
      return throwError(e);
    }));
 
  }

  error(message: string, keepAfterRouteChange = false) {
    // this.keepAfterRouteChange = keepAfterRouteChange;
    // this.subject.next({ type: 'error', text: message });
}

//   register(user: User) {
//     // return this.http.post(`${}/users/register`, user);
// }

  constructor(private http: HttpClient) { }
}
