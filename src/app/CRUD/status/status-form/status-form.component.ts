import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Status_model, Status_model2 } from 'src/app/models/status_model';
import { StatusService } from 'src/app/services/status/status.service';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.scss']
})
export class StatusFormComponent {

  //Récupération via getAll
  test_status : Status_model2[]=[{
    name:'julien',
    description:'dsfd'
   },
    {
    name:'sfdbg',
    description:'dsfd'}]

  ////////////////////////////////////////

  status_form : FormGroup = this._formBuilder.group({
    test : this._formBuilder.array<Status_model2>([]),
    //test : this._formBuilder.array([]),

    /*
    status : ['',[Validators.required]],
    start_date: ['',[Validators.required]],
    start_time:['',[Validators.required]],
    end_date: ['',[Validators.required]],
    end_time:['',[Validators.required]]
    */
  })

  ///////////////////////////////////////////////

  constructor(private __StatusService: StatusService,
     private _formBuilder : FormBuilder ){}

    ngOnInit(){
      this.setDefaultData(this.test_status)
      //this.add('julien','lejeune')
    }


    idNewStatusFront(test : Status_model[]):number{
      if(test.length==0){
        return 1}
      else{
        return test[test.length].id }}


    setDefaultData(test : Status_model2[]){
      /*
      let status = this.vh_form.get('status') as FormArray;
      status.push(new FormControl(1));
      */
      //(<FormArray>this.vh_form.get("status")).push(new FormControl(test));

      /*
      for(var i=0;i<test.length;i++){
        (<FormArray>this.status_form.get("test")).push(new FormControl(test[i]));
      }
      */
      for(var i=0;i<test.length;i++){
        //console.log(test[i])
        this.add(test[i].name,test[i].description)
      }
    }

  ////////////////////////////////////////

  add(name="", desc=""){
    let status = this.status_form.get('test') as FormArray;
    status.push(this._formBuilder.group({
      name : [name,Validators.required],
      description : [desc,Validators.required]
    }));
  }

  delete(index:number){
    let status = this.status_form.get('test') as FormArray;
    status.removeAt(index)
  }

/*

  update(index:number,name="",desc=""){
    let status = this.status_form.get('test') as FormArray;
    //let id = status[index].id
    //status.removeAt(index)

    status.push(this._formBuilder.group({
      //id : [id],
      name : [name,Validators.required],
      description : [desc,Validators.required]
    }));

  }

  */

  save(){
    console.log('data is ', this.status_form.value.test)
    this.__StatusService.setStatus(this.status_form.value.test)
  }


  //////////////////////////////////////////////////////////
  update_status() {
  throw new Error('Method not implemented.');
  }
  create_status() {
  throw new Error('Method not implemented.');
  }


}
