import { Injectable } from '@angular/core';
import { User } from '../User';
import {HttpClient} from '@angular/common/http';
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

getUsers(){
  this.http.get<User[]>('http://localhost:8080/api/users')
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

addUser(user: User){
  let obj = {
    userId: this.userService.user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password
  }

  this.http.post('http://localhost:8080/api/users', JSON.stringify(obj))
  .pipe(
    catchError((e)=>{
      return throwError(e);
    }))
    .subscribe(
      (data) => {
        console.log(data);
        this.users.unshift(user);
        this.subject.next(this.users);
      }
    )
}

//   register(user: User) {
//     // return this.http.post(`${}/users/register`, user);
// }

  constructor(private http: HttpClient, private userService:UserService) { }
}
