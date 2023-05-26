import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { VehicleDTO, Vehicle_form } from 'src/app/models/dto';

@Injectable({
  providedIn: 'root'
})
export class VehiclePropertiesService {

  private readonly BASE_URL = "http://localhost:8081/vehicle_properties"
  vehicle_properties: object | undefined;

  vehicleDTO : any|null=null

  constructor(private readonly _client : HttpClient) { }

  //Ajouter catchError commun à tous
  //BehaviorSubject à ajouter

  //GetAllVehicleProperties
  getAllProperties(){
    return this._client.get<VehicleDTO[]>(`${this.BASE_URL}/getall`)
  }

  //GetOne
  getOne(id:number){
    return this._client.get<VehicleDTO>(`${this.BASE_URL}/${id}/getOne`)
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





  //////////////////////////////////////

  setVehicleDTO(test :any){
    this.vehicleDTO=test
  }

  getVehicleDTO():any|null{
    return this.vehicleDTO
  }
}
