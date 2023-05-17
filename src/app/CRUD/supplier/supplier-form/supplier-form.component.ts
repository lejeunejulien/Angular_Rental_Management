import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.scss']
})
export class SupplierFormComponent {

  supplier : FormGroup = this._formBuilder.group({
    name : ['',[Validators.required]],
    adress: ['',[Validators.required]],
    tel:['',[Validators.required]],
    purchase_price:[0,[Validators.required]]

  })

  constructor(private __SupplierService: SupplierService, private _formBuilder : FormBuilder ){}

  create_supplier(){

  }

  update_supplier(){

  }
}
