import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {

  login_form : FormGroup = this._formBuilder.group({
    username : ['',[Validators.required]],
    password: ['',[Validators.required]]
  })


  constructor(private _AuthService: AuthService,
    private _formBuilder : FormBuilder,
    private _router : Router,
    private _activatedRoute : ActivatedRoute ){}

  login(){
        //this._BookingService.create(this.login_form.value).subscribe()

  }

  save(){

  }

}
