import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
