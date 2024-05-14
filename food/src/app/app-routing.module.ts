import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddmenusComponent } from './addmenus/addmenus.component';

const routes: Routes = [
  {path : "", component : MenuComponent},
  {path : "cart", component : CartPageComponent},
  {path : "login", component : LoginComponent},
  {path : "signup", component : SignupComponent},
  {path : "admin", component : AddmenusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


