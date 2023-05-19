import { DatePipe, FormatWidth, formatDate, getLocaleDateFormat, getLocaleDateTimeFormat } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import parse from 'date-fns/parse';
import { BookingService } from 'src/app/services/booking/booking.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent {


  booking_form : FormGroup = this._formBuilder.group({
    adress : ['',[Validators.required]],
    startDate: ['',[Validators.required]],
    startTime: ['',[Validators.required]],
    arrivalDate:['',[Validators.required]],
    arrivalTime:['',[Validators.required]],
    id_registred_user:[0,[Validators.required]],
    id_vehicle_properties:[0,[Validators.required]]

  })

 /*
  //npm i date-fns
  //Data récupérée du formulaire
  DateForm : string = "2017-03-08 12:30"+":00"
  LocalDateTime : Date = dateValidator(this.DateForm);

  */

  constructor(private __BookingService: BookingService, private _formBuilder : FormBuilder ){}

  create_booking(){

  }

  update_booking(){

  }


  /*
  dateValidator(c: FormControl) {
    const today = new Date();
    if(c.value > today) {
        return null;
    } else {
        return {dateValidator: {valid: false}};
    }
    */

}


