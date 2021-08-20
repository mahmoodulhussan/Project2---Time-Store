import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-update-user-info-page',
  templateUrl: './update-user-info-page.component.html',
  styleUrls: ['./update-user-info-page.component.css']
})
export class UpdateUserInfoPageComponent implements OnInit {

  email: string = '';
  password: string = '';
  error: boolean = false;


  constructor(private userService:UserService, private router:Router, private localStorageService:LocalStorageService ) {   }

     
  onSubmit(): void{
    console.log(
      
      this.email,
      this.password
      )
   

    this.userService.update(this.email, this.password)    
    .subscribe(data => {console.log(data)
     
      console.log(data.user.id)
   // save loggined buyer id  in local storage 
   this.localStorageService.setItem( "id"  ,   JSON.stringify(data.user.id) );
   this.error = false;
   this.router.navigateByUrl('');
  },
    (error) => this.error = true);
}


  ngOnInit(): void {
  }

}
