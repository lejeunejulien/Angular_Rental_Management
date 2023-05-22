import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleDTO, Vehicle_statusDTO } from 'src/app/models/dto';
import { StatusService } from 'src/app/services/status/status.service';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.scss']
})
export class StatusFormComponent {

  StatusList: Vehicle_statusDTO[]=null

  //Récupération via getAll
  test_status : Vehicle_statusDTO[]=[{
    id:2,
    status: 'available',
    start_date:'2001-01-01T00:00',
    end_date:'2001-01-01T03:00'
   },
    {
    id:3,
    status:'available',
    start_date:'2001-01-01T00:00',
    end_date:'2001-01-01T03:00'}]



  ////////////////////////////////////////

  status_form : FormGroup = this._formBuilder.group({
    statusArray : this._formBuilder.array<Vehicle_statusDTO>([]),
  })

  ///////////////////////////////////////////////

  constructor(private __StatusService: StatusService,
     private _formBuilder : FormBuilder,
     private _router : Router){}

    ngOnInit(){

      /*
      this.__StatusService.getAllVehicle_status()
      .subscribe(StatusList=>this.StatusList=StatusList)

      if(StatusList!=null){
        this.setDefaultData(this.StatusList)
      }

      */

      this.setDefaultData(this.test_status)
    }

    setDefaultData(test : Vehicle_statusDTO[]){
      /*
      let status = this.vh_form.get('status') as FormArray;
      status.push(new FormControl(1));
      (<FormArray>this.vh_form.get("status")).push(new FormControl(test));
      */

      for(var i=0;i<test.length;i++){
        this.add(
          test[i].id,
          test[i].status,
          test[i].start_date,
          test[i].end_date)
      }
    }

  ////////////////////////////////////////

  add(id=null,status="", start_date="", end_date=""){
    let new_exist = this.status_form.get('statusArray') as FormArray;
    new_exist.push(this._formBuilder.group({
      id : [id],
      status : [status,Validators.required],
      start_date : [start_date,Validators.required],
      end_date : [end_date,Validators.required],
    }));

    console.log(this.status_form.get('statusArray'))

    //Service -> creation status db pour avoir id
  }

  delete(index:number){
    let status = this.status_form.get('StatusArray') as FormArray;


    status.removeAt(index)
  }


  update(index_front:number){
    //-> Update via db
    let status = this.status_form.get('statusArray').value[index_front];
    console.log(status)

    //Update du Front est auto

    //Update du Back-end
    //console.log(index_front)
    //console.log(data)
  }

  save(){
    //plutôt ok pour quitter pas d'action pour cette fonction
    console.log('data is ', this.status_form.value.statusArray)
    this.__StatusService.setStatus(this.status_form.value.statusArray)
    this._router.navigate(['vehicle_properties'])
  }

}
