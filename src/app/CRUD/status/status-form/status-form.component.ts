import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle_statusDTO } from 'src/app/models/dto';
import { StatusService } from 'src/app/services/status/status.service';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.scss']
})


export class StatusFormComponent {

  form:FormArray
  DTO:Vehicle_statusDTO
  id:number
  ListvehiclestatusDTO : Vehicle_statusDTO [] = null
  list_length:number[]

  ////////////////////////////////////////

  status_form : FormGroup = this._formBuilder.group({
    statusArray : this._formBuilder.array<Vehicle_statusDTO>([]),
  })

  ///////////////////////////////////////////////

  constructor(private __StatusService: StatusService,
     private _formBuilder : FormBuilder,
     private _router : Router,
     private _activatedRoute : ActivatedRoute){}

    ngOnInit(){
      this.setDefaultData()
    }


    setDefaultData(){
      /*
      let status = this.vh_form.get('status') as FormArray;
      status.push(new FormControl(1));
      (<FormArray>this.vh_form.get("status")).push(new FormControl(test));
      */

      this.ListvehiclestatusDTO=this.__StatusService.getStatus()

      this.id= parseInt(this._activatedRoute.snapshot.params['id'])

      /*
      this.ListvehiclestatusDTO=[{
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
        */


        if(this.ListvehiclestatusDTO!=null){

          for(var i=0;i<this.ListvehiclestatusDTO.length;i++){
            this.add_DefaultData(
              this.ListvehiclestatusDTO[i].id,
              this.ListvehiclestatusDTO[i].status,
              this.ListvehiclestatusDTO[i].start_date,
              this.ListvehiclestatusDTO[i].end_date)
          }
        }
        }


        add_DefaultData(id=null,status="", start_date="", end_date=""){

          this.form = this.status_form.get('statusArray') as FormArray;
          this.form.push(this._formBuilder.group({
            //On ajoute id comme info supplémentaire
            id : [id],
            //On récupère/insére data
            status : [status,Validators.required],
            start_date : [start_date,Validators.required],
            end_date : [end_date,Validators.required],
          }));
        }


  ///////////////////////////////////////////////

  length(index:number){
    this.list_length.push(index)
    return true
  }

  check(index_front:number){
    let status = this.status_form.get('statusArray').value[index_front].id;
    if(status!=null){
      return true
    }
    else{
      return false;
    }
    }

  Request_Form(objet : any){
    return {
      status: objet.status,
      start_date : objet.start_date,
      end_date : objet.end_date
    }
  }

  create(index_front:number){

    this.DTO = this.status_form.get('statusArray').value[index_front]
    console.log(this.Request_Form(this.DTO))

    //this.__StatusService.create(this.Request_Form(this.DTO)).subscribe()

    //Delete all elements and reload
    for(var i=0;i<this.list_length.length;i++){
      let status = this.form.get('statusArray') as FormArray
      status.removeAt(i)
    }

    let status = this.form.get('statusArray') as FormArray
    status.removeAt(index_front)

    //this.setDefaultData()


  }

  cancel(index_front:number){

    //Annuler la création d'un status
    let status = this.status_form.get('statusArray') as FormArray
    status.removeAt(index_front)
  }

  ////////////////////////////////////



  delete(index_front:number){
    this.id = this.status_form.get('statusArray').value[index_front].id;

    //Delete Back-end
    //this.__StatusService.delete(this.id).subscribe()

    //Delete Front
    let status = this.status_form.get('statusArray') as FormArray
    status.removeAt(index_front)
  }

  update(index_front:number){
    //Update du front est auto

    //Update du back-end
    this.DTO = this.status_form.get('statusArray').value[index_front];
    this.id=this.status_form.get('statusArray').value[index_front].id;

    //this.__StatusService.update(this.id,this.Request_Form(this.DTO)).subscribe()

   //Ajouter un message de confirmation avant d'interagir avec la db

  }

  save(){
    //plutôt ok pour quitter pas d'action pour cette fonction
    //console.log('data is ', this.status_form.value.statusArray)
    //console.log('data is ', this.status_form.value)
    this.__StatusService.setStatus(this.status_form.value.statusArray)
    console.log(this.__StatusService.getStatus())
    this._router.navigate(['vehicle_properties'])
  }

}
