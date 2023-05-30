import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Vehicle_statusDTO, Vehicle_status_form } from 'src/app/models/dto';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private statusUpdate:Vehicle_statusDTO[]|null=[]
  private readonly BASE_URL = "http://localhost:8081/status"

  constructor(private readonly _client : HttpClient) { }

  setStatus(test: Vehicle_statusDTO[]|null) {
    this.statusUpdate=test
    //console.log(this.statusUpdate)
  }

  getStatus():Vehicle_statusDTO[]|null{
    return this.statusUpdate
  }

  /////////////////////////////////
  // Requests //

  //Ajouter catchError commun à tous
  //BehaviorSubject à ajouter

  //GetAll
  getAllVehicle_status(): Observable<Vehicle_statusDTO[]>{
    return this._client.get<Vehicle_statusDTO[]>(`${this.BASE_URL}/getall`)
  }

  //Update
  update(id:number, form: Vehicle_status_form){
    return this._client.patch(`${this.BASE_URL}/${id}/update`,form)
  }

  //Create
  create(form:  Vehicle_status_form){
    return this._client.post(`${this.BASE_URL}/add`,form)
  }


  //Delete
  delete(id:number){
    return this._client.delete(`${this.BASE_URL}/${id}/delete`)
  }


}
