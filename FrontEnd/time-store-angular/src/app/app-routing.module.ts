import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { UpdateUserInfoPageComponent } from './components/update-user-info-page/update-user-info-page.component';


const routes: Routes = [
  
    
    {path:'login', component: LoginPageComponent}
    ,
    {path:'signup', component: SignupPageComponent}
    ,
    {path:'update', component: UpdateUserInfoPageComponent}
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
