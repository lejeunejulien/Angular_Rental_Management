import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking/booking.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent {


  booking_form : FormGroup = this._formBuilder.group({
    adress : ['',[Validators.required]],
    start_date: ['',[Validators.required]],
    arrival_date:['',[Validators.required]],
    id_registred_user:[0,[Validators.required]],
    id_vehicle_properties:[0,[Validators.required]]
  })


  constructor(private _BookingService: BookingService,
    private _formBuilder : FormBuilder,
    private _router : Router,
    private _activatedRoute : ActivatedRoute ){}

  create(){
      //this._BookingService.create(this.booking_form.value).subscribe()

  }

  save(){

  }

}


