import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import {  Vehicle_form, Vehicle_statusDTO } from 'src/app/models/dto';
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
  vh_form : FormGroup

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

  this._statusService.setStatus(this.VehicleDTO.list_vehicle_status)
  */


  this.vh_form = this._formBuilder.group({
    mileage : [this.__VHService.get_vehicle_properties()?.mileage,[Validators.required]],
    year: [this.__VHService.get_vehicle_properties()?.year,[Validators.required]],
    engine_power:[this.__VHService.get_vehicle_properties()?.engine_power,[Validators.required, Validators.min(0)]],
    idcategory:[this._categoryService.getCategory(),[Validators.required]],
    idsupplier: [this._supplierService.getSupplier(),[Validators.required]],
    status:this._formBuilder.array<Vehicle_statusDTO>(this._statusService.getStatus())
  })
 }

//////////////////////////

update(){

  this.request_update={
    mileage: this.vh_form.get('mileage').value,
    year: this.vh_form.get('year').value,
    engine_power: this.vh_form.get('engine_power').value,
    id_category: this.vh_form.get('idcategory').value,
    id_supplier: this.vh_form.get('idsupplier').value,
    list_status_vehicle: this.vh_form.get('status').value
  }

  this.__VHService.update(this.id,this.request_update)
  .subscribe(() => this._router.navigate(['vh_general']))


 }


create(){

  this.__VHService.create(this.vh_form.value)
  .subscribe(()=>this._router.navigate(['vh_general']))

}

delete(){
  this.__VHService.delete(this.id)
  .subscribe(()=>this._router.navigate(['vh_general']))
}

}
