import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Vehicle_statusDTO } from 'src/app/models/dto';
import { StatusService } from 'src/app/services/status/status.service';
import { VehiclePropertiesService } from 'src/app/services/vehicle_properties/vehicle-properties.service';

@Component({
  selector: 'app-vhform',
  templateUrl: './vhform.component.html',
  styleUrls: ['./vhform.component.scss']
})

export class VHFormComponent {

//Récupération via getAll

  /*
 test_status : Status_model[]=[{
  id:1,
  name:'julien',
  description:'dsfd'
 },
  {id:2,
  name:'sfdbg',
  description:'dsfd'}]

  */


  vh_form : FormGroup = this._formBuilder.group({
    mileage : [0,[Validators.required]],
    year: [0,[Validators.required]],
    engine_power:[0,[Validators.required, Validators.min(0)]],
    idcategory:[0,[Validators.required]],
    idsupplier: [0,[Validators.required]],

    //Pas vehicle_status_DTO -> vehice_status_form
    status:this._formBuilder.array<Vehicle_statusDTO>([])

  })

constructor(private __VHService: VehiclePropertiesService,
   private _formBuilder : FormBuilder,
   private _statusService: StatusService ){}

ngOnInit(){
  //Affichage des datas existantes (getAll)
  //this.add(this.test_status);

  if (this._statusService.getStatus!=null){
    this.add(this._statusService.getStatus())
  }

 // this.add(this.test_status)
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
add(test : Vehicle_statusDTO[]){
  /*
  let status = this.vh_form.get('status') as FormArray;
  status.push(new FormControl(1));
  */
  //(<FormArray>this.vh_form.get("status")).push(new FormControl(test));

  (<FormArray>this.vh_form.get("status")).clear();
  (<FormArray>this.vh_form.get("status")).push(new FormControl(test));
  //console.log(this.vh_form.value.status) -> [{}]
  //console.log(this.vh_form.value)  -> {}

}








////////////////////////////////////////////////

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
