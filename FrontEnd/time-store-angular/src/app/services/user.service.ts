import { Injectable } from '@angular/core';
import { User } from '../User';
import {HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';

import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];
  subject: Subject<User[]> = new Subject<User[]>();


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
    return this.http.post<any>("http://localhost:8080/login", JSON.stringify({ email,  password}) ,{headers}  )
    .pipe(catchError((e)=>{
      return throwError(e);
    }));
 
  }

  error(message: string, keepAfterRouteChange = false) {
    // this.keepAfterRouteChange = keepAfterRouteChange;
    // this.subject.next({ type: 'error', text: message });
}

// getUsers(){
//   this.http.get<User[]>('http://localhost:8080/api/users')
//   .pipe(
//     catchError((e)=> {
//       return throwError(e);
//     }))
//     .subscribe(
//       (data) => {
//         this.users = data;
//         this.subject.next(this.users);
//       }
//     )
// }

// addUser(user: User){
//   let obj = {
//     userId: this.userService.user.id,
//     firstName: user.firstName,
//     lastName: user.lastName,
//     email: user.email,
//     password: user.password
//   }

//   this.http.post('http://localhost:8080/api/users', JSON.stringify(obj))
//   .pipe(
//     catchError((e)=>{
//       return throwError(e);
//     }))
//     .subscribe(
//       (data) => {
//         console.log(data);
//         this.users.unshift(user);
//         this.subject.next(this.users);
//       }
//     )
// }

//   register(user: User) {
//     // return this.http.post(`${}/users/register`, user);
// }

//the problem is here n; you ccan not inject userService into its own class
  constructor(private http: HttpClient) { }
}
