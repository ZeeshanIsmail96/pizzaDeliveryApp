import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class PizzaappService {

    // admin
    getadmin_url = "http://localhost:3000/api/getadmin";

    // user
    adduser_url = "http://localhost:3000/api/adduser";
    getuser_url = "http://localhost:3000/api/getuser";
    deleteuser_url = "http://localhost:3000/api/deleteuser";
    updateuser_url = "http://localhost:3000/api/updateuser";
    constructor( private _http:Http ){}   

    // admin
    getAdminData(){
        return this._http.get(this.getadmin_url).map(data =>{
            console.log(data.json())
            return data.json()
        } )
    }

    // user
    addUserData(data){
        return this._http.post(this.adduser_url, data).map(data =>{
            console.log(data.json())
            return data.json()
        } )
    }
    getUserData(){
        return this._http.get(this.getuser_url).map(data =>{
            console.log(data.json())
            return data.json()
        } )
    }
    deleteUserData(id){
        return this._http.delete(`${this.deleteuser_url}/${id}`).map(data =>{
            console.log(data.json())
            return data.json()
        } )
    }
  
}
