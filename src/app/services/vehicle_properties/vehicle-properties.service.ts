import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { VehicleDTO } from 'src/app/models/dto';

@Injectable({
  providedIn: 'root'
})
export class VehiclePropertiesService {

  private readonly BASE_URL = "http://localhost:8080"
  vehicle_properties: object | undefined;

  constructor(private readonly _client : HttpClient) { }

  //Ajouter catchError commun à tous
  //BehaviorSubject à ajouter

  //GetAllVehicleProperties
  public getAllProperties(): Observable<VehicleDTO>{
    return this._client.get<VehicleDTO>(`${this.BASE_URL}/getall`).pipe(
      tap((data: any) => {
        this.vehicle_properties=data;
      })

    )

  //public create(form: )


  }
}
