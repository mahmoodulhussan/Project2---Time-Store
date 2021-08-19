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
import { RegisterComponent } from './components/register/register.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
// import { UsersContainerComponent } from './components/users-container/users-container.component';
// import { NewUserComponent } from './components/new-user/new-user.component';
// import { UserComponent } from './components/user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    WatchItemsContainerComponent,
    WatchComponent,
    LoginPageComponent,
    ButtonComponentComponent,
    NavbarComponentComponent,
    RegisterComponent

    
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
