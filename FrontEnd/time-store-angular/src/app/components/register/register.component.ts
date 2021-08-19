import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';



// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;

  constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService
      
  ) { }

   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });

  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
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
}

}
