import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PizzaappService } from './pizzaapp.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { TeamComponent } from './team/team.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PizzahousesComponent } from './pizzahouses/pizzahouses.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    OrderComponent,
    TeamComponent,
    ContactusComponent,
    GalleryComponent,
    PizzahousesComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PizzaappService],
  bootstrap: [AppComponent]
})
export class AppModule { }


