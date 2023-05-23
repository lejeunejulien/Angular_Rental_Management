import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryDTO, Category_form, PriceDTO } from 'src/app/models/dto';
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

  //PriceDO et CategoryDTO font partie de VehiclePropertiesDTO
  //On récupère VehiclePropertiesDTO comprenant les datas PriceDTO et CategoryDTO
  //Normalement ici on reprend ces données

  //Récupération via getAll
  categoryDTO : CategoryDTO[]=[{
    id:2,
    brand: 'available',
    model:'Ford',
    price: {id :3,
      price_day: 50,
      price_weekend: 200,
      price_month : 1000,
      caution: 800,}
   }]

    //////////////////////

  category_form : FormGroup = this._formBuilder.group({
    categoryArray : this._formBuilder.array<CategoryDTO>([])
  })

  constructor(private __CategoryService: CategoryService,
     private _formBuilder : FormBuilder,
     private _router : Router ){}

     ngOnInit(){
      this.getAll()
     }

     getAll(){
      this.setDefaultData(this.categoryDTO)
     }


     setDefaultData(test : CategoryDTO[]){

      for(var i=0;i<test.length;i++){
        this.add_DefaultData(
          test[i].id,
          test[i].brand,
          test[i].model,
          test[i].price.id)
      }
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

 save(){

 }


////////////////////////////////////////////

update_category() {
throw new Error('Method not implemented.');
}
create_category() {
throw new Error('Method not implemented.');
}

}
