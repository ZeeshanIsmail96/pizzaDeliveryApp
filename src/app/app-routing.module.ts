import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { TeamComponent } from './team/team.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PizzahousesComponent } from './pizzahouses/pizzahouses.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'order',component:OrderComponent},
  {path:'team',component:TeamComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'pizzahouses',component:PizzahousesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// import { CaliforniaComponent } from './california/california.component';
// import { DominoComponent } from './domino/domino.component';
// import { PizzahutComponent } from './pizzahut/pizzahut.component';
// import { PizzamaxComponent } from './pizzamax/pizzamax.component';

  // {path:'california',component:CaliforniaComponent},
  // {path:'domino',component:DominoComponent},
  // {path:'pizzahut',component:PizzahutComponent},
  // {path:'pizzamax',component:PizzamaxComponent},