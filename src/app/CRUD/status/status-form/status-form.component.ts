import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Status_model} from 'src/app/models/status_model';
import { StatusService } from 'src/app/services/status/status.service';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.scss']
})
export class StatusFormComponent {


  //Récupération via getAll
  test_status : Status_model[]=[{
    id:1,
    status: 'available',
    start_date:'2001-01-01T00:00',
    end_date:'2001-01-01T03:00'
   },
    {
    id:2,
    status:'available',
    start_date:'2001-01-01T00:00',
    end_date:'2001-01-01T03:00'}]



  ////////////////////////////////////////

  status_form : FormGroup = this._formBuilder.group({
    statusArray : this._formBuilder.array<Status_model>([]),
  })

  ///////////////////////////////////////////////

  constructor(private __StatusService: StatusService,
     private _formBuilder : FormBuilder,
     private _router : Router){}

    ngOnInit(){
      this.setDefaultData(this.test_status)
    }

    setDefaultData(test : Status_model[]){
      /*
      let status = this.vh_form.get('status') as FormArray;
      status.push(new FormControl(1));
      (<FormArray>this.vh_form.get("status")).push(new FormControl(test));
      */

      for(var i=0;i<test.length;i++){
        this.add(test[i].status,test[i].start_date,test[i].end_date)
      }
    }

  ////////////////////////////////////////

  add(status="", start_date="", end_date=""){
    let new_exist = this.status_form.get('statusArray') as FormArray;
    new_exist.push(this._formBuilder.group({
      status : [status,Validators.required],
      start_date : [start_date,Validators.required],
      end_date : [end_date,Validators.required],
    }));

    //Service -> creation status db pour avoir id
  }

  delete(index:number){
    let status = this.status_form.get('StatusArray') as FormArray;
    status.removeAt(index)
  }


  update(index:number){
    //-> Update via dv
    //let status = this.status_form.get('test').value[index] as FormArray;
  }

  save(){
    //plutôt ok pour quitter pas d'action pour cette fonction
    console.log('data is ', this.status_form.value.statusArray)
    this.__StatusService.setStatus(this.status_form.value.statusArray)
    this._router.navigate(['vehicle_properties'])
  }

}
