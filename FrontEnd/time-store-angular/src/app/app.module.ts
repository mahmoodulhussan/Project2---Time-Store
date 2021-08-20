import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WatchItemsContainerComponent } from './components/watch-items-container/watch-items-container.component';
import { WatchComponent } from './components/watch/watch.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ButtonComponentComponent } from './components/button-component/button-component.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './components/user/user.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { UpdateUserInfoPageComponent } from './components/update-user-info-page/update-user-info-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    WatchItemsContainerComponent,
    WatchComponent,
    LoginPageComponent,
    ButtonComponentComponent,
    NavbarComponentComponent,
    UserComponent,
    SignupPageComponent,
    UpdateUserInfoPageComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
