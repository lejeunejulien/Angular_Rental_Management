import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryDTO, Category_form } from 'src/app/models/dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryUpdate:number|null=0

  private readonly BASE_URL = "http://localhost:8081/category"


  constructor(private readonly _client : HttpClient) { }

  setCategory(id : number|null){
    this.categoryUpdate=id
  }

  getCategory():number|null{
    return this.categoryUpdate
  }

  ///////////////////////////////////////////////


  //GetAll
   getAllCategory(){
    return this._client.get<CategoryDTO[]>(`${this.BASE_URL}/getall`)
  }


  //Update
  update(id:number, form: Category_form){
    return this._client.patch(`${this.BASE_URL}/${id}/update`,form)
  }

  //Create
  create(form:  Category_form){
    return this._client.post(`${this.BASE_URL}/add`,form)
  }

  //Delete
  delete(id:number){
    return this._client.delete(`${this.BASE_URL}/${id}/delete`)
  }
}
