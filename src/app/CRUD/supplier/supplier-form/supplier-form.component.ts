import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupplierDTO } from 'src/app/models/dto';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.scss']
})
export class SupplierFormComponent {

  form:FormArray
  DTO:SupplierDTO
  id:number
  existant:boolean=false


  SupplierDTO : SupplierDTO[]=[{
      id :3,
      name: 'name',
      adress: 'adress',
      tel : '4558',
      purchase_price: 800
   }]

  supplier_form : FormGroup = this._formBuilder.group({
    supplierArray : this._formBuilder.array<SupplierDTO>([]),
  })

  constructor(private __SupplierService: SupplierService,
    private _formBuilder : FormBuilder,
    private _router : Router){}

    ngOnInit(){
      this.getAll()
      if(this.SupplierDTO[0].tel!=null){
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

      this.setDefaultData(this.SupplierDTO)
    }

    setDefaultData(test : SupplierDTO[]){
      /*
      let status = this.vh_form.get('status') as FormArray;
      status.push(new FormControl(1));
      (<FormArray>this.vh_form.get("status")).push(new FormControl(test));
      */

      for(var i=0;i<test.length;i++){
        this.add_DefaultData(
          test[i].id,
          test[i].name,
          test[i].adress,
          test[i].tel,
          test[i].purchase_price)
      }
    }

  //////////////////////////////////

    add_DefaultData(id=null,name=null, adress=null, tel=null,purchase_price= null){

      this.form = this.supplier_form.get('supplierArray') as FormArray;
      this.form.push(this._formBuilder.group({
        //On ajoute id comme info supplémentaire
        id : [id],
        //On récupère les datas du form du template
        name : [name,Validators.required],
        adress : [adress,Validators.required],
        tel : [tel,Validators.required],
        purchase_price:[purchase_price,Validators.required]
      }));
    }

    Request_Form(objet : any){
      return {
        name : [objet.name],
        adress : [objet.adress],
        tel : [objet.tel],
        purchase_price : [objet.purchase_price]
      }
    }

  create(index_front:number){

    this.DTO = this.supplier_form.get('supplierArray').value[index_front]
    console.log(this.Request_Form(this.DTO))

    //this.__StatusService.create(this.Request_Form(this.DTO)).subscribe()

    this.existant=true
  }

  update(index_front:number){
    console.log(this.supplier_form)

    this.DTO = this.supplier_form.get('supplierArray').value[index_front];
    this.id=this.supplier_form.get('supplierArray').value[index_front].id;

    //this.__StatusService.update(this.id,this.Request_Form(this.DTO)).subscribe()
    //Ajouter un message de confirmation avant d'interagir avec la db

  }

  delete(index_front:number){
    this.id = this.supplier_form.get('supplierArray').value[index_front].id;

    //Delete Back-end
    //this.__StatusService.delete(this.id).subscribe()
  }

  save(){
    //plutôt ok pour quitter pas d'action pour cette fonction
    //console.log('data is ', this.status_form.value.statusArray)
    console.log('data is ', this.supplier_form)
    this.__SupplierService.setSupplier(this.supplier_form.value.supplierArray)
    this._router.navigate(['vehicle_properties'])
  }
}
