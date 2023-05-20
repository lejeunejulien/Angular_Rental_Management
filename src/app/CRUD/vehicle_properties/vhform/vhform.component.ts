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

//Récupération via getAll
 test_status : Status_model[]=[{
  id:1,
  name:'julien',
  description:'dsfd'
 },
  {id:2,
  name:'sfdbg',
  description:'dsfd'}]


  vh_form : FormGroup = this._formBuilder.group({
    mileage : [0,[Validators.required]],
    year: [0,[Validators.required]],
    engine_power:[0,[Validators.required, Validators.min(0)]],
    idcategory:[0,[Validators.required]],
    idsupplier: [0,[Validators.required]],
    status:this._formBuilder.array<Status_model>([])

  })

constructor(private __VHService: VehiclePropertiesService, private _formBuilder : FormBuilder ){}

ngOnInit(){
  //Affichage des datas existantes (getAll)
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
add(test : Status_model[]){
  /*
  let status = this.vh_form.get('status') as FormArray;
  status.push(new FormControl(1));
  */
  //(<FormArray>this.vh_form.get("status")).push(new FormControl(test));


  (<FormArray>this.vh_form.get("status")).push(new FormControl(test));
  //console.log(this.vh_form.value.status) -> [{}]
  //console.log(this.vh_form.value)  -> {}

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
