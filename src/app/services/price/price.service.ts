import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PriceDTO, Price_form } from 'src/app/models/dto';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  private priceUpdate:any|null[]=null
  private readonly BASE_URL = "http://localhost:8080/price/"


  constructor(private readonly _client : HttpClient) { }

  setPrice(test: any) {
    this.priceUpdate=test
    console.log(this.priceUpdate)
  }

  getPrice():any|null{
    return this.priceUpdate
  }

  ///////////////////

   //GetAll
   getAllVehicle_status(){
    return this._client.get<PriceDTO[]>(`${this.BASE_URL}/getall`)
  }


  //Update
  update(id:number, form: Price_form){
    return this._client.patch(`${this.BASE_URL}/${id}/update`,form)
  }

  //Create
  create(form:  Price_form){
    return this._client.post(`${this.BASE_URL}/add`,form)
  }


  //Delete
  delete(id:number){
    return this._client.delete(`${this.BASE_URL}/${id}/delete`)
  }
}
