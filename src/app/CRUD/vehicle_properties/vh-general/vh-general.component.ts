import { Component } from '@angular/core';
import { VehicleDTO } from 'src/app/models/dto';
import { VehiclePropertiesService } from 'src/app/services/vehicle_properties/vehicle-properties.service';

@Component({
  selector: 'app-vh-general',
  templateUrl: './vh-general.component.html',
  styleUrls: ['./vh-general.component.scss']
})
export class VhGeneralComponent {

  listVehicleProperties : VehicleDTO[]=[]

  constructor(private _vehicleService : VehiclePropertiesService){

  /*
  this._vehicleService.getAllProperties()
  .subscribe(data => this.listVehicleProperties = data)

  console.log(this.listVehicleProperties)
  */

  }
}
