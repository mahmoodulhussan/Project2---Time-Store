import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})




@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {


  @Output() onAddUser: EventEmitter<User> = new EventEmitter();
  
  
  // registerForm: FormGroup;
  // firstName: string = '';
  // lastName: string = '';
  // email: string = '';
  // password: string = '';
  // loading = false;
  // submitted = false;
  // error: string;

  constructor( private userService:UserService){}

  // constructor(
  //       private formBuilder: FormBuilder,
  //       private router: Router,
  //       private userService: UserService
      
  // ) { }

  onSubmit(): void{
    // if(!this.email){
    //   this.error = true;
    //   return;
    // }

    // const newUser: User = {
    //   id: 0,
    //   firstName: this.userService.user.firstName,
    //   lastName: this.userService.user.lastName,
    //   email: this.userService.user.email,
    //   password: this.userService.user.password
    // }

    // this.onAddUser.emit(newUser);

    // this.firstName = '';
    // this.lastName = '';
    // this.email = '';
    // this.password = '';
    // // this.error = false
  }


   // convenience getter for easy access to form fields
  //  get f() { return this.registerForm.controls; }

   ngOnInit(): void {
  }

  // ngOnInit() {
  //   this.registerForm = this.formBuilder.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     username: ['', Validators.required],
  //     password: ['', [Validators.required, Validators.minLength(6)]]
  // });

  // }

  // @Input() user: User = {
  //   id: 0,
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: ''
  // };

  // onSubmit() {
  //   this.submitted = true;

    // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //     return;
    // }

    // this.loading = true;
//     this.userService.register(this.registerForm.value)
//         .pipe(first())
//         .subscribe(
//             data => {
//                 this.router.navigate(['/login'], { queryParams: { registered: true }});
//             },
//             error => {
//                 this.error = error;
//                 this.loading = false;
//             });
// }

}
