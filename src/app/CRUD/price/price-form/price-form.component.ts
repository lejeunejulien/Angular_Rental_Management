import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PriceDTO } from 'src/app/models/dto';
import { PriceService } from 'src/app/services/price/price.service';
import { VehiclePropertiesService } from 'src/app/services/vehicle_properties/vehicle-properties.service';

@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
  styleUrls: ['./price-form.component.scss']
})
export class PriceFormComponent {

  form:FormArray
  DTO:PriceDTO
  id:number
  existant:boolean=false
  price_form : FormGroup
  PriceDTO : PriceDTO
  id_vh_properties : number=0

  constructor(private __PriceService: PriceService,
    private _VHService : VehiclePropertiesService,
    private _formBuilder : FormBuilder,
    private _router : Router,
    private _activatedRoute : ActivatedRoute){

    this.id= parseInt(this._activatedRoute.snapshot.params['id_price'])

    /*
    if(this.id!=0){
      this.__PriceService.getOne(this.id).subscribe(data => this.PriceDTO = data)
    */

    this.PriceDTO ={
      id : 3,
      price_day : 50,
      price_weekend : 200,
      price_month : 1000,
      caution : 1500
   }

    this.price_form = this._formBuilder.group({
      price_day : [this.PriceDTO?.price_day,Validators.required],
      price_weekend : [this.PriceDTO?.price_weekend,Validators.required],
      price_month : [this.PriceDTO?.price_month,Validators.required],
      caution:[this.PriceDTO?.caution,Validators.required]
      })

    }

  //////////////////////////////////

  update(){
     //this.__PriceService.update(this.id,this.price_form.value).subscribe()
  }

  create(){
    //this.__PriceService.create(this.price_form.value).subscribe()
  }

  delete(){
    //this.__PriceService.delete(this.id).subscribe()
  }

  save(){
    console.log('data is ', this.price_form.value)
    this.id_vh_properties = this._VHService.get_id()

    this._router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
      }
      this._router.onSameUrlNavigation = 'reload';

    //this._router.navigateByUrl("/vh_form/" + this.id)
    this._router.navigateByUrl("/vh_form/" + this.id_vh_properties)

  }

}
