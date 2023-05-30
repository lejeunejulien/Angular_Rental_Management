import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Vehicle_form, Vehicle_propertiesDTO } from 'src/app/models/dto';

@Injectable({
  providedIn: 'root'
})
export class VehiclePropertiesService {

  private readonly BASE_URL = "http://localhost:8081/vehicle_properties"

  id_vh_properties : number = 0
  vehicle_properties : Vehicle_propertiesDTO | null

  get_id(){
    return this.id_vh_properties
  }

  set_id(id : number){
    this.id_vh_properties = id
  }


  get_vehicle_properties(){
    return this.vehicle_properties
  }

  set_vehicle_properties(vehicle :  Vehicle_propertiesDTO){
    this.vehicle_properties = vehicle
  }

  constructor(private readonly _client : HttpClient) { }

  //Ajouter catchError commun à tous
  //BehaviorSubject à ajouter

  //GetAllVehicleProperties
  getAllProperties(){
    return this._client.get<Vehicle_propertiesDTO[]>(`${this.BASE_URL}/getall`)
  }

  //GetOne
  getOne(id:number){
    return this._client.get<Vehicle_propertiesDTO>(`${this.BASE_URL}/${id}/getOne`)
  }


  //Update
  update(id:number, form: Vehicle_form){
    return this._client.patch(`${this.BASE_URL}/${id}/update`,form)
  }

  //Create
  create(form:  Vehicle_form){
    return this._client.post(`${this.BASE_URL}/add`,form)
  }


  //Delete
  delete(id:number){
    return this._client.delete(`${this.BASE_URL}/${id}/delete`)
  }


}
