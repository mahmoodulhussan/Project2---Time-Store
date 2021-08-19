import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../User';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  @Output() onAddUser: EventEmitter<User> = new EventEmitter();

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = ''
  error: boolean = false;

  constructor(private userService:UserService) { }

  onSubmit(): void{
    // if(!this.content){
    //   this.error = true;
    //   return;
    // }

    const newUser: User = {
      id: 0,
      firstName: this.userService.user.firstName,
      lastName: this.userService.user.lastName,
      email: this.userService.user.email,
      password: this.userService.user.password
    }

    this.onAddUser.emit(newUser);

    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
    this.error = false;
  }

  


  ngOnInit(): void {
  }

}
