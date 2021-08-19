import { Injectable } from '@angular/core';
import { User } from '../User';
import {HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';

import {catchError, last, retry} from 'rxjs/operators';
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
    return this.http.post<any>("http://localhost:3000/login", JSON.stringify({ email,  password}) ,{headers}  )
    .pipe(catchError((e)=>{
      return throwError(e);
    }));
 
  }


  signup( id:any, firstName:string, lastName:string, email:string, password:string) : Observable<any>{
    console.log(id, firstName, lastName, email, password)
    let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json');
    return this.http.post<any>("http://localhost:8080/api/v1/registration", JSON.stringify({ id, firstName, lastName, email,  password}) ,{headers}  )
    .pipe(catchError((e)=>{
      return throwError(e);
    }));
 
  }

  error(message: string, keepAfterRouteChange = false) {
    // this.keepAfterRouteChange = keepAfterRouteChange;
    // this.subject.next({ type: 'error', text: message });
}

getUsers(){
  this.http.get<User[]>('http://localhost:3000/users')
  .pipe(
    catchError((e)=> {
      return throwError(e);
    }))
    .subscribe(
      (data) => {
        this.users = data;
        this.subject.next(this.users);
      }
    )
}

// addUser(user: User){
//   let obj = {
//     userId: this.user.id,
//     firstName: this.user.firstName,
//     lastName: this.user.lastName,
//     email: this.user.email,
//     password: this.user.password
//   }

//   this.http.post('http://localhost:3000/users', JSON.stringify(obj))
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

// getUsers():User[]{
//   return USERS;
// }

// addUser(user: User): User[]{
//   let postArr: User[] = USERS;
//   userArr.unshift(user);
//   return userArr;
// }

//   register(user: User) {
//     // return this.http.post(`${}/users/register`, user);
// }

  constructor(private http: HttpClient) { }
}
