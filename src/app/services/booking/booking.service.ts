import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingDTO, Booking_form } from 'src/app/models/dto';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private id_user :number = 0
  private id_vehicle : number = 0

  private readonly BASE_URL = "http://localhost:8081/booking/"


  constructor(private readonly _client : HttpClient) { }

  //////////////////////////////////////

  getId_User(){
    return this.id_user
  }

  setId_User(id:number){
    this.id_user=id
  }

  getId_vehicle(){
    return this.id_vehicle
  }

  setId_vehicle(id : number){
    this.id_vehicle=id
  }

  ////////////////////////////////////////

   //GetAll
   getAllVehicle_status(){
    return this._client.get<BookingDTO[]>(`${this.BASE_URL}/getall`)
  }


  //Update
  update(id:number, form: Booking_form){
    return this._client.patch(`${this.BASE_URL}/${id}/update`,form)
  }

  //Create
  create(form:  Booking_form){
    return this._client.post(`${this.BASE_URL}/add`,form)
  }


  //Delete
  delete(id:number){
    return this._client.delete(`${this.BASE_URL}/${id}/delete`)
  }

}
