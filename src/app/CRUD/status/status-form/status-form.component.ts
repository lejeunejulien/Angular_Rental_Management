import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vehicle_statusDTO } from 'src/app/models/dto';
import { StatusService } from 'src/app/services/status/status.service';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.scss']
})


export class StatusFormComponent {

  StatusList: Vehicle_statusDTO[]=null
  form:FormArray
  DTO:Vehicle_statusDTO
  id:number


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

  //Changer Vehicle_statusDTO en Vehicle_status_form
  status_form : FormGroup = this._formBuilder.group({
    statusArray : this._formBuilder.array<Vehicle_statusDTO>([]),
  })

  ///////////////////////////////////////////////

  constructor(private __StatusService: StatusService,
     private _formBuilder : FormBuilder,
     private _router : Router){}

    ngOnInit(){
      this.getAll()
    }

    getAll(){
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
        this.add_DefaultData(
          test[i].id,
          test[i].status,
          test[i].start_date,
          test[i].end_date)
      }
    }

  ///////////////////////////////////////////////

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
      status: [objet.status],
      start_date : [objet.start_date],
      end_date : [objet.end_date]
    }
  }

  create(index_front:number){

    this.DTO = this.status_form.get('statusArray').value[index_front]
    //console.log(this.Request_Form(this.DTO))


    //this.__StatusService.create(this.Request_Form(this.DTO)).subscribe()

    //Mettre les buttons à jour + mettre à jour l'affichage des status dans le template
    //this.status_form.get('statusArray').removeAt() -> All
    //this.getAll()

  }

  cancel(index_front:number){

    //Annuler la création d'un status
    let status = this.status_form.get('statusArray') as FormArray
    status.removeAt(index_front)
  }

  ////////////////////////////////////

 add_DefaultData(id=null,status="", start_date="", end_date=""){

    this.form = this.status_form.get('statusArray') as FormArray;
    this.form.push(this._formBuilder.group({
      //On ajoute id comme info supplémentaire
      id : [id],
      //On récupère les datas du form du template
      status : [status,Validators.required],
      start_date : [start_date,Validators.required],
      end_date : [end_date,Validators.required],
    }));
  }

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
