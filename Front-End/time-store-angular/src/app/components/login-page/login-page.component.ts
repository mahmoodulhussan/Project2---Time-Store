import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

import { LocalStorageService } from 'src/app/services/local-storage.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email: string = '';
  password: string = '';
  error: boolean = false;

   
  constructor(private userService:UserService, private router:Router, private localStorageService:LocalStorageService ) { }
  
  onSubmit(): void{
    console.log(this.email, this.password)
    this.userService.login(this. email, this.password)    
    .subscribe(data => {this.userService.user = {
      id: data.id,
      email: data.email,
      password:data.password
    }

    //save loggined buyer id  in local storage 
    this.localStorageService.setItem( 'id'  , JSON.stringify( data.id)   );
    this.error = false;
    this.router.navigateByUrl('/home');
  },
    (error) => this.error = true);
  }


  ngOnInit(): void {
  }

}
