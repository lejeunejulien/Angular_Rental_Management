import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Status_model } from 'src/app/models/status_model';
import { VehiclePropertiesService } from 'src/app/services/vehicle_properties/vehicle-properties.service';

@Component({
  selector: 'app-vhform',
  templateUrl: './vhform.component.html',
  styleUrls: ['./vhform.component.scss']
})

export class VHFormComponent {

  test_status : Status_model = {
    name : 'julien',
    description : 'courageux'
  }


  vh_form : FormGroup = this._formBuilder.group({
    mileage : [0,[Validators.required]],
    year: [0,[Validators.required]],
    engine_power:[0,[Validators.required, Validators.min(0)]],
    idcategory:[0,[Validators.required]],
    idsupplier: [0,[Validators.required]],
    status:this._formBuilder.array<number>([])

  })

constructor(private __VHService: VehiclePropertiesService, private _formBuilder : FormBuilder ){}

ngOnInit(){
  this.add(this.test_status);
}


  /*
add(name="", desc=""){
  let status = this.vh_form.get('status') as FormArray;
  status.push(this._formBuilder.group({
    name : [name],
    description : [desc]
  }));

}
*/
add(test : Status_model){
  /*
  let status = this.vh_form.get('status') as FormArray;
  status.push(new FormControl(1));
  */
  (<FormArray>this.vh_form.get("status")).push(new FormControl(1));


}

new_form(){
  console.log('data is ',this.vh_form.value)
}

create_properties() {
  throw new Error('Method not implemented.');
  }

update_properties() {
throw new Error('Method not implemented.');
}





}
