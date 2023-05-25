import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { VehicleDTO, Vehicle_form, Vehicle_statusDTO } from 'src/app/models/dto';
import { StatusService } from 'src/app/services/status/status.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { VehiclePropertiesService } from 'src/app/services/vehicle_properties/vehicle-properties.service';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-vhform',
  templateUrl: './vhform.component.html',
  styleUrls: ['./vhform.component.scss']
})

export class VHFormComponent {

  form:FormArray
  DTO:VehicleDTO
  id:number
  others=true
  request_update : Vehicle_form

// UTILISER DES EXPORT FUNCTION POUR LES FORMULAIRES POUR EVITER REPETITON

//Récupération via getAll

 VehicleDTO : VehicleDTO=null
 vh_form : FormGroup

constructor(private __VHService: VehiclePropertiesService,
 private _formBuilder : FormBuilder,
 private _statusService: StatusService,
 private _categoryService: CategoryService,
 private _supplierService: SupplierService ){

  this.VehicleDTO = {
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
      id : 5,
      status : 'available',
      start_date : 'start_date',
      end_date : 'end_date'
    }]
   }

  this._categoryService.setCategory(this.VehicleDTO.category.id)
  this._supplierService.setSupplier(this.VehicleDTO.supplier.id)
  this._statusService.setStatus(this.VehicleDTO.list_vehicle_status)

  this.vh_form = this._formBuilder.group({
    //mileage:this._formBuilder.array<number>([]),
    mileage : [this.VehicleDTO?.mileage,[Validators.required]],
    year: [this.VehicleDTO?.year,[Validators.required]],
    engine_power:[this.VehicleDTO?.engine_power,[Validators.required, Validators.min(0)]],
    idcategory:[this.VehicleDTO?.category.id,[Validators.required]],
    idsupplier: [this.VehicleDTO?.supplier,[Validators.required]],

    //Pas vehicle_status_DTO -> vehice_status_form
    status:this._formBuilder.array<Vehicle_statusDTO>([])
  })
 }

//////////////////////////

update(){
  this._categoryService.setCategory(1)

  this.request_update={
    mileage: this.vh_form.get('mileage').value,
    year: this.vh_form.get('year').value,
    engine_power: this.vh_form.get('engine_power').value,
    category: this._categoryService.getCategory(),
    supplier: this._supplierService.getSupplier(),
    list_vehicle_status: this._statusService.getStatus()
  }

  console.log(this.request_update)

 }



create(){

}

delete(){

}

}
