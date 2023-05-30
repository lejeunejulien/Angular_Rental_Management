import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthDTO, LoginForm } from 'src/app/models/dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly BASE_URL = "http://localhost:8081/auth/sign_in"

  private id_user : number = null

  private role : string = null


  constructor(private readonly _client : HttpClient) { }


  get_id_user(){
    return this.id_user
  }

  set_id_user(id :number){
    this.id_user = id
  }

  ///////////////////////////////

  get_role(){
    return this.role
  }

  set_role(role : string){
    this.role = role
  }

  ///////////////////////////////

   login (LoginForm : LoginForm){
    return this._client.post<AuthDTO>(`${this.BASE_URL}`, LoginForm)
   }

}
