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
  //wishlistText: String = "Wishlist";

username:String =  this.userService.user.email? this.userService.user.email: "Guest";



  directTologinpage():void{

this.router.navigateByUrl('/login');

  }

  directToWishlistPage(){

    //check if there is any

  //  this.router.navigateByUrl('/register')

  }


  directToRegisterPage():void{

    this.router.navigateByUrl('/register');
    
      }

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit( ): void {
  }

}


