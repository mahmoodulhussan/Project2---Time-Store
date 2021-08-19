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
    firstName: "",
    lastName: "",
    email: "",
    password:""
  }

  login( email:String, password:String) : Observable<User>{
    return this.http.post<User>("http://localhost:3000/login", JSON.stringify({ email, password}))
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
