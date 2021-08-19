import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../../User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.css']
})
export class UsersContainerComponent implements OnInit {

  users: Observable<User[]> = new Observable<User[]>();

  addUser(user: User): void{
    this.userService.addUser(user);
    this.users = this.userService.subject;
  }

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    //We will use the ngOnInit lifecycle method to grap the posts as soon as the posts-container component is created
    this.userService.getUsers();
    this.users = this.userService.subject;
  }

}
