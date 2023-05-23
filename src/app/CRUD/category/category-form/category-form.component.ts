import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryDTO } from 'src/app/models/dto';
import { CategoryService } from 'src/app/services/category/category.service';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent {

  CateogryList: CategoryDTO[]=null
  form:FormArray
  DTO:CategoryDTO
  id:number
  selected:number

  //PriceDO et CategoryDTO font partie de VehiclePropertiesDTO
  //On récupère VehiclePropertiesDTO comprenant les datas PriceDTO et CategoryDTO
  //Normalement ici on reprend ces données
  //Soit VehicleProperties a une category soit null -> NotNull Back-end
  categoryDTO : CategoryDTO[]=[{
    id:2,
    brand: 'available',
    model:'Ford',
    price: {id :3,
      price_day: 50,
      price_weekend: 200,
      price_month : 1000,
      caution: 800}
   }]

   //List category -> GetAll
   ListcategoryDTO : CategoryDTO[]=[{
    id:2,
    brand: 'available',
    model:'Ford',
    price: {id :3,
      price_day: 50,
      price_weekend: 200,
      price_month : 1000,
      caution: 800}
   },
   {
    id:3,
    brand: 'available',
    model:'Mercedes',
    price: {id :4,
      price_day: 60,
      price_weekend: 300,
      price_month : 2000,
      caution: 1000,}
   },
  ]

    //////////////////////

  category_form : FormGroup = this._formBuilder.group({
    categoryArray : this._formBuilder.array<CategoryDTO>([])
  })

  constructor(private __CategoryService: CategoryService,
     private _formBuilder : FormBuilder,
     private _router : Router ){}

     ngOnInit(){
      this.getAll()
      this.selected=this.categoryDTO[0].id
     }

     getAll(){
      /*
      this.__StatusService.getAllVehicle_status()
      .subscribe(StatusList=>this.StatusList=StatusList)

      if(StatusList!=null){
        this.setDefaultData(this.StatusList)
      }

      */

      this.setDefaultData(this.ListcategoryDTO)
     }

     Selected(index_front:number){
      this.selected=this.category_form.get('categoryArray').value[index_front].id
     }


     setDefaultData(test : CategoryDTO[]){

      /*
      let status = this.vh_form.get('status') as FormArray;
      status.push(new FormControl(1));
      (<FormArray>this.vh_form.get("status")).push(new FormControl(test));
      */

      for(var i=0;i<test.length;i++){
        this.add_DefaultData(
          test[i].id,
          test[i].brand,
          test[i].model,
          test[i].price.id)
      }
    }
///////////////////////////////////////////////

check(index_front:number){
  let category = this.category_form.get('categoryArray').value[index_front].id;
  if(category!=null){
    return true
  }
  else{
    return false;
  }
  }

  Request_Form(objet : any){
    return {
      brand: [objet.brand],
      model : [objet.model],
      id_price : [objet.id_price]
    }
  }

  create(index_front:number){

    this.DTO = this.category_form.get('categoryArray').value[index_front]
    console.log(this.Request_Form(this.DTO))


    //this.__StatusService.create(this.Request_Form(this.DTO)).subscribe()

    //Mettre les buttons à jour + mettre à jour l'affichage des status dans le template
    //this.status_form.get('statusArray').removeAt() -> All
    //this.getAll()

  }

  cancel(index_front:number){

    //Annuler la création d'un status
    let category = this.category_form.get('categoryArray') as FormArray
    category.removeAt(index_front)
  }




///////////////////////////////////////////////
 add_DefaultData(id=null, brand="",model="",id_price=null){
  this.form = this.category_form.get('categoryArray') as FormArray;
    this.form.push(this._formBuilder.group({
      //On ajoute id comme info supplémentaire
      id : [id],
      //On récupère les datas du form du template
      brand : [brand,Validators.required],
      model : [model,Validators.required],
      id_price : [id_price,Validators.required],
    }));
 }

 delete(index_front:number){
  this.id = this.category_form.get('categoryArray').value[index_front].id;

  //Delete Back-end
  //this.__StatusService.delete(this.id).subscribe()

  //Delete Front
  let category = this.category_form.get('categoryArray') as FormArray
  category.removeAt(index_front)
}

update(index_front:number){
  //Update du front est auto

  //Update du back-end
  this.DTO = this.category_form.get('categoryArray').value[index_front];
  this.id=this.category_form.get('categoryArray').value[index_front].id;

  //this.__StatusService.update(this.id,this.Request_Form(this.DTO)).subscribe()

 //Ajouter un message de confirmation avant d'interagir avec la db

}

 save(){
  console.log('data is ', this.category_form)
  this.__CategoryService.setCategory(this.category_form.value.categoryArray)
  this._router.navigate(['vehicle_properties'])
 }


////////////////////////////////////////////

update_category() {
throw new Error('Method not implemented.');
}
create_category() {
throw new Error('Method not implemented.');
}

}
