import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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


  PriceDTO : PriceDTO[]=[{
      id :3,
      price_day: 50,
      price_weekend: 200,
      price_month : 1000,
      caution: 800
   }]

  price : FormGroup = this._formBuilder.group({
    price_day : [0,[Validators.required]],
    price_week_end: [0,[Validators.required]],
    price_month:[0,[Validators.required]],
    caution:[0,[Validators.required]]
  })

  constructor(private __PriceService: PriceService,
    private _formBuilder : FormBuilder ){}



////////////////////////////////////////////
update_price() {
throw new Error('Method not implemented.');
}
create_price() {
throw new Error('Method not implemented.');
}

}
