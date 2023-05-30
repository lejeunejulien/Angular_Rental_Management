import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking/booking.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  user_form : FormGroup

  constructor(private _BookingService : BookingService,
    private _UserService : UserService,
    private _formBuilder : FormBuilder,
    private _router : Router,
    private _activatedRoute : ActivatedRoute){


    this.user_form = this._formBuilder.group({
      last_name : ['',Validators.required],
      first_name : ['',Validators.required],
      username : ['',Validators.required],
      password :['',Validators.required]
      })
    }

  //////////////////////////////////

  create(){
    //this.__UserService.create(this.user_form.value).subscribe()
  }

  save(){
    console.log('data is ', this.user_form)
  }

}
