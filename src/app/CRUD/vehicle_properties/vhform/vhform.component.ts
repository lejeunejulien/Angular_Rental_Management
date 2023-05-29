import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { VehicleDTO, Vehicle_form, Vehicle_statusDTO } from 'src/app/models/dto';
import { StatusService } from 'src/app/services/status/status.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { VehiclePropertiesService } from 'src/app/services/vehicle_properties/vehicle-properties.service';
import { SupplierService } from 'src/app/services/supplier/supplier.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vhform',
  templateUrl: './vhform.component.html',
  styleUrls: ['./vhform.component.scss']
})

export class VHFormComponent {

  id:number=null
  request_update : Vehicle_form=null
  //VehicleDTO : VehicleDTO


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


  vh_form : FormGroup

  id_category : number = null
  id_supplier : number = null
  list_vehicle_status : Vehicle_statusDTO[] = null
  id_price : number = null

constructor(private __VHService: VehiclePropertiesService,
 private _formBuilder : FormBuilder,
 private _statusService: StatusService,
 private _categoryService: CategoryService,
 private _supplierService: SupplierService,
 private _activatedRoute : ActivatedRoute,
 private _router : Router ){

 this.id= parseInt(this._activatedRoute.snapshot.params['id'])
 this.__VHService.set_id(this.id)

  /*
  if(this.id!=0){
    this._VHService.getOne(this.id)
    .subscribe(data => this.VehicleDTO = data)

    this.id_category=this.VehicleDTO.category.id
    this.id_supplier= this.VehicleDTO.supplier.id
    this.list_vehicle_status = this.VehicleDTO.list_vehicle_status
    this.id_price = this.VehicleDTO.category.price.id
  }
  */

  this._statusService.setStatus(this.VehicleDTO.list_vehicle_status)



  this.vh_form = this._formBuilder.group({
    mileage : [this.VehicleDTO?.mileage,[Validators.required]],
    year: [this.VehicleDTO?.year,[Validators.required]],
    engine_power:[this.VehicleDTO?.engine_power,[Validators.required, Validators.min(0)]],
    idcategory:[this.VehicleDTO?.category.id,[Validators.required]],
    idsupplier: [this.VehicleDTO?.supplier,[Validators.required]],
    status:this._formBuilder.array<Vehicle_statusDTO>(this.VehicleDTO.list_vehicle_status)
  })
 }

//////////////////////////

update(){

  this.request_update={
    mileage: this.vh_form.get('mileage').value,
    year: this.vh_form.get('year').value,
    engine_power: this.vh_form.get('engine_power').value,
    category: this.vh_form.get('idcategory').value,
    supplier: this.vh_form.get('idsupplier').value,
    list_vehicle_status: this.vh_form.get('status').value
  }
 }

 //this.__VHService.update(this.id,this.request_update).subscribe()


create(){
  //this.__VHService.create(this.vh_form.value).subscribe()

  /*
  this.__VHService.getAllProperties()
  .subscribe(data => this.id =
    this.__VHService.set_id(this.id)
    )
  */

}

delete(){
  //this.__VHService.delete(this.id).subscribe
  this._router.navigate(['vh_general'])
}

}
