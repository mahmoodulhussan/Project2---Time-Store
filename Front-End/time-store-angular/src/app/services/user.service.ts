import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User = {
    id:0,
    username: ""
  }

  login(username:string, password:string) Observable<User>{
    return this.http.post<User>("url", JSON.stringify({username, password}))
    .pipe(catchError((e)=>{
      return throwError(e);
    }));
 
  }

  constructor(private http: HttpClient) { }
}
