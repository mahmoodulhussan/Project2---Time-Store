import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterComponent } from './components/register/register.component';
//import { NewUserComponent } from './components/new-user/new-user.component';
//import { UsersContainerComponent } from './components/users-container/users-container.component';


const routes: Routes = [
  
    
    {path:'login', component: LoginPageComponent}
    ,
    {path:'register', component: RegisterComponent}
    ,
    
    
    {path: '', component: HomePageComponent,  pathMatch: 'full'}
];





@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
