import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle_propertiesDTO } from 'src/app/models/dto';
import { CategoryService } from 'src/app/services/category/category.service';
import { PriceService } from 'src/app/services/price/price.service';
import { StatusService } from 'src/app/services/status/status.service';
import { SupplierService } from 'src/app/services/supplier/supplier.service';
import { VehiclePropertiesService } from 'src/app/services/vehicle_properties/vehicle-properties.service';

@Component({
  selector: 'app-vh-general',
  templateUrl: './vh-general.component.html',
  styleUrls: ['./vh-general.component.scss']
})
export class VhGeneralComponent {

  listVehicleProperties : Vehicle_propertiesDTO[]=[]
  //VehicleDTO : Vehicle_propertiesDTO
  id! : number


  VehicleDTO = {
    id : 2,
    mileage: 10000,
    year : 2022,
    engine_power : 300,

    category : {
      id : 2,
      brand : 'Peugeot',
      model : '308',
      price : {
        id : 3,
        price_day : 50,
        price_weekend : 200,
        price_month : 1000,
        caution : 1500
      }
    },
    supplier : {
      id :4,
      name : 'julien',
      adress : 'liege',
      tel : '13',
      purchase_price : 18000
    },
    list_vehicle_status : [{
      id:2,
      status: 'available',
      start_date:'2008-01-01T00:00',
      end_date:'2001-01-01T03:00'
    },
      {
      id:3,
      status:'available',
      start_date:'2001-01-01T00:00',
      end_date:'2001-01-01T03:00'}]
  }

  constructor(private _vehicleService : VehiclePropertiesService,
    private _router : Router,
    private _PriceService : PriceService,
    private _statusService: StatusService,
    private _categoryService: CategoryService,
    private _supplierService: SupplierService,
    ){

  /*
  this._vehicleService.getAllProperties()
  .subscribe(data => {this.listVehicleProperties = data,
    console.log(this.listVehicleProperties)})
  */

  }


  RedirectTo_Vehicles_Properties(id :number){

      /*
      this._vehicleService.getOne(id)
      .subscribe(data =>{
        this._categoryService.setCategory(data.category.id),
        this._PriceService.setPrice(data.category.price.id),
        this._supplierService.setSupplier(data.supplier.id),
        this._statusService.setStatus(data.list_vehicle_status),
        this._vehicleService.set_vehicle_properties(data),
        this.id = data.id,

        this._router.routeReuseStrategy.shouldReuseRoute = () => {
          return false;
          }
          this._router.onSameUrlNavigation = 'reload';

        this._router.navigateByUrl("/vh_form/" + this.id)
      })

      */



      this._vehicleService.set_vehicle_properties(this.VehicleDTO)


      this._router.routeReuseStrategy.shouldReuseRoute = () => {
        return false;
        }
        this._router.onSameUrlNavigation = 'reload';

      this._router.navigateByUrl("/vh_form/" + this.id)

  }


}
