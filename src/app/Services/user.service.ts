import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { regUSer, User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api : ApiService) { }


  getAllUsers(){
    return this.api.getAll('https://reqres.in/api/users?page=1')
  }

  
  getAlProducts(){
    return this.api.getAll('https://fakestoreapi.com/products')
  }

  getUserById(id : number){
    return this.api.getById('https://reqres.in/api/users', id)
  }
  postUser(user: regUSer){
      return this.api.postApi('https://reqres.in/api/register', user)
  }
  loginUser(user: regUSer){
    return this.api.postApi('https://reqres.in/api/login', user)
  }
}


// {
//   "email": "eve.holt@reqres.in",
//   "password": "pistol"
// }