import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryDTO } from 'src/app/models/dto';
import { CategoryService } from 'src/app/services/category/category.service';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})

export class CategoryFormComponent {

  ListcategoryDTO : CategoryDTO[]
  form:FormArray
  DTO:CategoryDTO
  id:number
  selected:number
  list_length:number[]

  //////////////////////

  category_form : FormGroup = this._formBuilder.group({
    categoryArray : this._formBuilder.array<CategoryDTO>([])
  })

  constructor(private __CategoryService: CategoryService,
     private _formBuilder : FormBuilder,
     private _router : Router,
     private _activatedRoute : ActivatedRoute ){}

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
      this.__StatusService.getAllVehicle_status()
      .subscribe(StatusList=>this.StatusList=StatusList)
      */

      this.ListcategoryDTO =[{
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

      /*
      if(StatusList!=[]){
      */
        this.selected= parseInt(this._activatedRoute.snapshot.params['id'])

        for(var i=0;i<this.ListcategoryDTO.length;i++){
          this.add_DefaultData(
            this.ListcategoryDTO[i].id,
            this.ListcategoryDTO[i].brand,
            this.ListcategoryDTO[i].model,
            this.ListcategoryDTO[i].price.id)
        }
      }

      //}


    add_DefaultData(id=null, brand="", model="", id_price=null){
      this.form = this.category_form.get('categoryArray') as FormArray;
        this.form.push(this._formBuilder.group({
          //On ajoute id comme info supplémentaire
          id : [id],
          //On récupère/insére data
          brand : [brand,Validators.required],
          model : [model,Validators.required],
          id_price : [id_price,Validators.required],
        }));
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


length(index:number){
  this.list_length.push(index)
  return true
}

  Selection(index_front:number){
    this.selected=this.category_form.get('categoryArray').value[index_front].id
   }

   check_selected(index_front:number){
    if(this.selected==this.category_form.get('categoryArray').value[index_front].id){
      return true
    }
    else{
      return false
    }
   }


  Request_Form(objet : any){
    return {
      brand: objet.brand,
      model : objet.model,
      id_price : objet.id_price
    }
  }

  /////////////////////////////////////////////////

  create(index_front:number){

    this.DTO = this.category_form.get('categoryArray').value[index_front]
    console.log(this.Request_Form(this.DTO))

    //this.__StatusService.create(this.Request_Form(this.DTO)).subscribe()

    //Delete all elements and reload
    for(var i=0;i<this.list_length.length;i++){
      let category = this.category_form.get('categoryArray') as FormArray
      category.removeAt(i)
    }

    let category = this.category_form.get('categoryArray') as FormArray
    category.removeAt(index_front)

    //this.setDefaultData()

  }

  cancel(index_front:number){

    //Annuler la création d'un status
    let category = this.category_form.get('categoryArray') as FormArray
    category.removeAt(index_front)
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
  this.__CategoryService.setCategory(this.selected)
  this._router.navigate(['vehicle_properties'])
 }


}
