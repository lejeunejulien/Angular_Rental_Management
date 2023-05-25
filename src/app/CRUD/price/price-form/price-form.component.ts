import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PriceDTO } from 'src/app/models/dto';
import { PriceService } from 'src/app/services/price/price.service';

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


  PriceDTO : PriceDTO[]=[{
      id :3,
      price_day: 50,
      price_weekend: 200,
      price_month : 1000,
      caution: 800
   }]

  price : FormGroup = this._formBuilder.group({
    priceArray : this._formBuilder.array<PriceDTO>([]),
  })

  constructor(private __PriceService: PriceService,
    private _formBuilder : FormBuilder,
    private _router : Router){}

    ngOnInit(){
      this.getAll()
      if(this.PriceDTO[0].price_day!=null){
        this.existant=true
      }
    }

    getAll(){
       /*
      this.__StatusService.getAllVehicle_status()
      .subscribe(StatusList=>this.StatusList=StatusList)

      if(StatusList!=null){
        this.setDefaultData(this.StatusList)
      }

      */

      this.setDefaultData(this.PriceDTO)
    }

    setDefaultData(test : PriceDTO[]){
      /*
      let status = this.vh_form.get('status') as FormArray;
      status.push(new FormControl(1));
      (<FormArray>this.vh_form.get("status")).push(new FormControl(test));
      */

      for(var i=0;i<test.length;i++){
        this.add_DefaultData(
          test[i].id,
          test[i].price_day,
          test[i].price_weekend,
          test[i].price_month,
          test[i].caution)
      }
    }

  //////////////////////////////////

    add_DefaultData(id=null,price_day=null, price_weekend=null, price_month=null,caution= null){

      this.form = this.price.get('priceArray') as FormArray;
      this.form.push(this._formBuilder.group({
        //On ajoute id comme info supplémentaire
        id : [id],
        //On récupère les datas du form du template
        price_day : [price_day,Validators.required],
        price_week_end : [price_weekend,Validators.required],
        price_month : [price_month,Validators.required],
        caution:[caution,Validators.required]
      }));
    }

    Request_Form(objet : any){
      return {
        price_day : [objet.price_day],
        price_weekend : [objet.price_weekend],
        price_month : [objet.price_month],
        caution : [objet.caution]
      }
    }

  create(index_front:number){

    this.DTO = this.price.get('priceArray').value[index_front]
    console.log(this.Request_Form(this.DTO))

    //this.__StatusService.create(this.Request_Form(this.DTO)).subscribe()

    this.existant=true
  }

  update(index_front:number){
    console.log(this.price)

    this.DTO = this.price.get('priceArray').value[index_front];
    this.id=this.price.get('priceArray').value[index_front].id;

    //this.__StatusService.update(this.id,this.Request_Form(this.DTO)).subscribe()
    //Ajouter un message de confirmation avant d'interagir avec la db

  }

  delete(index_front:number){
    this.id = this.price.get('priceArray').value[index_front].id;

    //Delete Back-end
    //this.__StatusService.delete(this.id).subscribe()
  }

  save(){
    //plutôt ok pour quitter pas d'action pour cette fonction
    //console.log('data is ', this.status_form.value.statusArray)
    console.log('data is ', this.price)
    this.__PriceService.setPrice(this.price.value.priceArray)
    this._router.navigate(['vehicle_properties'])
  }


}
