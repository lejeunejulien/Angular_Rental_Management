import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryDTO } from 'src/app/models/dto';
import { CategoryService } from 'src/app/services/category/category.service';
import { PriceService } from 'src/app/services/price/price.service';
import { VehiclePropertiesService } from 'src/app/services/vehicle_properties/vehicle-properties.service';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})

export class CategoryFormComponent {

  ListcategoryDTO : CategoryDTO[]=[]
  form:FormArray
  DTO:CategoryDTO
  id:number
  selected:number
  id_price:number
  id_vh_properties : number = 0

  //////////////////////

  category_form : FormGroup = this._formBuilder.group({
    categoryArray : this._formBuilder.array<CategoryDTO>([])
  })

  constructor(private __CategoryService: CategoryService,
    private _PriceService: PriceService,
    private _VHService : VehiclePropertiesService,
     private _formBuilder : FormBuilder,
     private _router : Router,
     private _activatedRoute : ActivatedRoute ){
     }

     ngOnInit(){
      this.setDefaultData()

      this.id_price== parseInt(this._activatedRoute.snapshot.params['id_price'])
     }

     setDefaultData(){

      this.selected= parseInt(this._activatedRoute.snapshot.params['id_category'])

      /*
      let status = this.vh_form.get('status') as FormArray;
      status.push(new FormControl(1));
      (<FormArray>this.vh_form.get("status")).push(new FormControl(test));
      */

      /*
      this.__CategoryService.getAllCategory()
      .subscribe(ListcategoryDTO=>this.ListcategoryDTO=ListcategoryDTO)
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
        brand: 'Mercedes',
        model:'GLS',
        price: {id :4,
          price_day: 60,
          price_weekend: 300,
          price_month : 2000,
          caution: 1000,}
      },
      ]

      if(this.ListcategoryDTO.length>0){

        for(var i=0;i<this.ListcategoryDTO.length;i++){
          this.add_DefaultData(
            this.ListcategoryDTO[i].id,
            this.ListcategoryDTO[i].brand,
            this.ListcategoryDTO[i].model,
            this.ListcategoryDTO[i].price.id)
        }
      }

      if(this.ListcategoryDTO.length==0){
        this.add_DefaultData()
      }

      }


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

check(index_front : number){

let category = this.category_form.get('categoryArray').value[index_front].id;
  if(category!=null){
    return true
  }
  else{
    return false;
  }
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

    /*
    this.__CategoryService.create(this.Request_Form(this.DTO)).subscribe((response:any)=>{
      console.log(response);
    })
    */

    //Delete all elements and reload
    for(var i=0;i<this.ListcategoryDTO.length;i++){
      let category = this.category_form.get('categoryArray') as FormArray
      category.removeAt(i)
    }

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
  //this.__CategoryService.delete(this.id).subscribe()

  //Delete Front
  let category = this.category_form.get('categoryArray') as FormArray
  category.removeAt(index_front)
}

update(index_front:number){
  //Update du front est auto

  //Update du back-end
  this.DTO = this.category_form.get('categoryArray').value[index_front];
  this.id=this.category_form.get('categoryArray').value[index_front].id;

  //this.__CategoryService.update(this.id,this.Request_Form(this.DTO)).subscribe()

  //Ajouter un message de confirmation avant d'interagir avec la db

}

 save(){
  console.log('data is ', this.category_form.value)
  this.__CategoryService.setCategory(this.selected)
  this.id_vh_properties=this._VHService.get_id()

  this._router.routeReuseStrategy.shouldReuseRoute = () => {
    return false;
    }
    this._router.onSameUrlNavigation = 'reload';

  //this._router.navigateByUrl("/vh_form/" + this.id)
  this._router.navigateByUrl("/vh_form/" + this.id_vh_properties)
 }


}
