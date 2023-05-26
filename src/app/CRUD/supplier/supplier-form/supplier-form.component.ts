import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierDTO, Supplier_form } from 'src/app/models/dto';
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
  selected:number
  list_length:number[]
  ListSupplierDTO : SupplierDTO[]=null

  supplier_form : FormGroup = this._formBuilder.group({
    supplierArray : this._formBuilder.array<SupplierDTO>([]),
  })


  constructor(private __SupplierService: SupplierService,
    private _formBuilder : FormBuilder,
    private _router : Router,
    private _activatedRoute : ActivatedRoute){
    }

    ngOnInit(){
      this.setDefaultData()
    }

   setDefaultData(){
      /*
      let status = this.vh_form.get('status') as FormArray;
      status.push(new FormControl(1));
      (<FormArray>this.vh_form.get("status")).push(new FormControl(test));
      */

      /*
      this.__SupplierService.getAllSupplier()
      .subscribe(ListSupplierDTO=>this.ListSupplierDTO= ListSupplierDTO)
      */

      this.ListSupplierDTO=[{
        id :3,
        name: 'name',
        adress: 'adress',
        tel : '4558',
        purchase_price: 800
     },
     {
      id :4,
      name : 'julien',
      adress : 'liege',
      tel : '13',
      purchase_price : 18000
   }]

   /*
   if(StatusList!=null){
    */
    this.selected= parseInt(this._activatedRoute.snapshot.params['id'])


      for(var i=0;i<this.ListSupplierDTO.length;i++){
        this.add_DefaultData(
          this.ListSupplierDTO[i].id,
          this.ListSupplierDTO[i].name,
          this.ListSupplierDTO[i].adress,
          this.ListSupplierDTO[i].tel,
          this.ListSupplierDTO[i].purchase_price)
      }
    }


    // }

    add_DefaultData(id=null,name=null, adress=null, tel=null,purchase_price= null){

      this.form = this.supplier_form.get('supplierArray') as FormArray;
      this.form.push(this._formBuilder.group({
        //On ajoute id comme info supplémentaire
        id : [id],
        //On récupère/insére data
        name : [name,Validators.required],
        adress : [adress,Validators.required],
        tel : [tel,Validators.required],
        purchase_price:[purchase_price,Validators.required]
      }));
    }

    ////////////////////////////////////////////

    check(index_front:number){
      let supplier = this.supplier_form.get('supplierArray').value[index_front].id;
      if(supplier!=null){
        return true
      }
      else{
        return false;
      }
      }


    length(index:number){
      this.list_length.push(index)
      return true
    }

      Selection(index_front:number){
        this.selected=this.supplier_form.get('supplierArray').value[index_front].id
       }

       check_selected(index_front:number){
        if(this.selected==this.supplier_form.get('supplierArray').value[index_front].id){
          return true
        }
        else{
          return false
        }
       }


    Request_Form(objet : any){
      return {
        name : objet.name,
        adress : objet.adress,
        tel : objet.tel,
        purchase_price : objet.purchase_price
      }
    }

  create(index_front:number){

    this.DTO = this.supplier_form.get('supplierArray').value[index_front]
    console.log(this.Request_Form(this.DTO))


    //this.__SupplierService.create(this.Request_Form(this.DTO)).subscribe()

    //Delete all elements and reload
    for(var i=0;i<this.list_length.length;i++){
      let supplier = this.supplier_form.get('supplierArray') as FormArray
      supplier.removeAt(i)
    }

    let supplier = this.supplier_form.get('supplierArray') as FormArray
    supplier.removeAt(index_front)

    //this.setDefaultData()
  }

  cancel(index_front:number){

    //Annuler la création d'un status
    let supplier = this.supplier_form.get('supplierArray') as FormArray
    supplier.removeAt(index_front)
  }


  update(index_front:number){
    console.log(this.supplier_form)

    this.DTO = this.supplier_form.get('supplierArray').value[index_front];
    this.id=this.supplier_form.get('supplierArray').value[index_front].id;

    //this.__SupplierService.update(this.id,this.Request_Form(this.DTO)).subscribe()
    //Ajouter un message de confirmation avant d'interagir avec la db

  }

  delete(index_front:number){
    this.id = this.supplier_form.get('supplierArray').value[index_front].id;

    //Delete Back-end
    //this.__SupplierService.delete(this.id).subscribe()

    //Delete Front
    let supplier = this.supplier_form.get('supplierArray') as FormArray
    supplier.removeAt(index_front)
  }

  save(){
    //plutôt ok pour quitter pas d'action pour cette fonction
    //console.log('data is ', this.status_form.value.statusArray)
    console.log('data is ', this.supplier_form)
    this.__SupplierService.setSupplier(this.selected)
    this._router.navigate(['vehicle_properties'])
  }
}
