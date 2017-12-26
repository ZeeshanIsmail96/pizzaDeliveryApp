import { Component, OnInit } from '@angular/core';

import { PizzaappService } from './../pizzaapp.service';

@Component({
  selector: 'app-pizzahouses',
  templateUrl: './pizzahouses.component.html',
  styleUrls: ['./pizzahouses.component.css']
})
export class PizzahousesComponent implements OnInit {
  
  constructor(private service: PizzaappService){}

  getAdmin(){
    this.service.getAdminData().subscribe(data =>{
      console.log(data,"data from db")
    },
    err =>{
      console.error(err,"error");
    }
  )
  }

  myData = {
    "name": "abc",
    "username": "def",
    "email": "ghi",
    "password": "anffajf",
    "contactno": "430953"
  };

  addUser(myData){
    this.service.addUserData(myData).subscribe(data =>{
      console.log(data,"data from db")
    },
    err =>{
      console.error(err,"error");
    }
  )
  }

  id={
    "id":"5a3afe02318c061009ac9c5e"
  }

  getUser(){
    this.service.getUserData().subscribe(data =>{
      console.log(data,"data from db")
    },
    err =>{
      console.error(err,"error");
    }
  )
  }

  deleteUser(id){
    this.service.deleteUserData(id).subscribe(data =>{
      console.log(data,"data from db")
    },
    err =>{
      console.error(err,"error");
    }
  )
  }
}
