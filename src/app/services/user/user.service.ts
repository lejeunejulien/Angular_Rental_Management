import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO, User_form } from 'src/app/models/dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly BASE_URL = "http://localhost:8080/user/"


  constructor(private readonly _client : HttpClient) { }

   //GetAll
   getAllUser(){
    return this._client.get<UserDTO[]>(`${this.BASE_URL}/getall`)
  }


  //GetOne
  getOne(id : number){
    return this._client.get<UserDTO>(`${this.BASE_URL}/${id}/getone`)
  }


  //Update
  update(id:number, form: User_form){
    return this._client.patch(`${this.BASE_URL}/${id}/update`,form)
  }

  //Create
  create(form: User_form){
    return this._client.post(`${this.BASE_URL}/add`,form)
  }


  //Delete
  delete(id:number){
    return this._client.delete(`${this.BASE_URL}/${id}/delete`)
  }
}
