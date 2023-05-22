import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { VehicleDTO, Vehicle_statusDTO } from 'src/app/models/dto';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private statusUpdate:any|null[]=null

  private readonly BASE_URL = "http://localhost:8080"
  vehicle_status: any | undefined;

  constructor(private readonly _client : HttpClient) { }

  setStatus(test: any) {
    this.statusUpdate=test
    console.log(this.statusUpdate)
  }

  getStatus():any|null{
    return this.statusUpdate
  }

  /////////////////////////////////
  // Requests //

  //Ajouter catchError commun à tous
  //BehaviorSubject à ajouter

  //GetAllVehicleStatus
  getAllVehicle_status(): Observable<Vehicle_statusDTO[]>{
    return this._client.get<Vehicle_statusDTO[]>(`${this.BASE_URL}/getall`)
  }

  //Create
  //public create(form: )


  //Update


  //Delete



}
