import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {



  loginText: String = "Login";
  signupText: String = "SignUp";
  wishlistText: String = "Wishlist";

  directTologinpage():void{

this.router.navigateByUrl('/login');

  }

  directToRegisterPage():void{

    this.router.navigateByUrl('/login');
    
      }

  constructor(private router:Router) { }

  ngOnInit( ): void {
  }

}


