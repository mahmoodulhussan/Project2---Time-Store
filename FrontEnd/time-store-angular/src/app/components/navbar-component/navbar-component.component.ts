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
  updateText: String = "Update User Info";
  wishlistText: String = "Wishlist";

  directTologinpage():void{

this.router.navigateByUrl('/login');

  }

  directUpdatePage():void{

    this.router.navigateByUrl('/update');
    
      }

  directToRegisterPage():void{

    this.router.navigateByUrl('/signup');
    
      }

  constructor(private router:Router) { }

  ngOnInit( ): void {
  }

}


