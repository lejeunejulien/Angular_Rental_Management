import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { VehiclePropertiesService } from 'src/app/services/vehicle_properties/vehicle-properties.service';

@Component({
  selector: 'app-vhform',
  templateUrl: './vhform.component.html',
  styleUrls: ['./vhform.component.scss']
})

export class VHFormComponent {


  vh_form : FormGroup = this._formBuilder.group({
    mileage : ['',[Validators.required]],
    year: ['',[Validators.required]],
    engine_power:[0,[Validators.required, Validators.min(0)]],
    category:['',[Validators.required]],
    supplier: ['',[Validators.required]],
    status:this._formBuilder.array([])

  })

constructor(private __VHService: VehiclePropertiesService, private _formBuilder : FormBuilder ){}

ngOnInit(){
 this.setDefaultData();
}

setDefaultData(){
  this.add("julien", "courageux");
}

add(name="", desc=""){
  let status = this.vh_form.get('status') as FormArray;
  status.push(this._formBuilder.group({
    name : [name],
    description : [desc]
  }));
}

create_properties() {
  throw new Error('Method not implemented.');
  }

update_properties() {
throw new Error('Method not implemented.');
}





}
