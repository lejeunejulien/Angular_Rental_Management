import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PriceService } from 'src/app/services/price/price.service';

@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
  styleUrls: ['./price-form.component.scss']
})
export class PriceFormComponent {

  price : FormGroup = this._formBuilder.group({
    price_day : [0,[Validators.required]],
    price_wk: [0,[Validators.required]],
    price_month:[0,[Validators.required]],
    caution:[0,[Validators.required]]

  })

  constructor(private __PriceService: PriceService, private _formBuilder : FormBuilder ){}

update_price() {
throw new Error('Method not implemented.');
}
create_price() {
throw new Error('Method not implemented.');
}

}
