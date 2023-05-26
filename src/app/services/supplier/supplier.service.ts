import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupplierDTO, Supplier_form } from 'src/app/models/dto';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private supplierUpdate:number|null
  private readonly BASE_URL = "http://localhost:8081/supplier"


  constructor(private readonly _client : HttpClient) { }

  setSupplier(id: number|null) {
    this.supplierUpdate=id
  }

  getSupplier():number|null{
    return this.supplierUpdate
  }

  /////////////////////////////////

   //GetAll
   getAllSupplier(){
    return this._client.get<SupplierDTO[]>(`${this.BASE_URL}/getall`)
  }


  //Update
  update(id:number, form: Supplier_form){
    return this._client.patch(`${this.BASE_URL}/${id}/update`,form)
  }

  //Create
  create(form:  Supplier_form){
    return this._client.post(`${this.BASE_URL}/add`,form)
  }


  //Delete
  delete(id:number){
    return this._client.delete(`${this.BASE_URL}/${id}/delete`)
  }
}
