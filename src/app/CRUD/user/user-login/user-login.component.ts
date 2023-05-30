import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthDTO } from 'src/app/models/dto';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {

  AuthDTO : AuthDTO |null|undefined

  login_form : FormGroup = this._formBuilder.group({
    username : ['',[Validators.required]],
    password: ['',[Validators.required]]
  })


  constructor(private _AuthService: AuthService,
    private _formBuilder : FormBuilder,
    private _router : Router,
    private _UserService : UserService,
    private _activatedRoute : ActivatedRoute ){}


  login(){
      this._AuthService.login(this.login_form.value)
      .subscribe(data  => {
        if(data.token){
          this._AuthService.set_id_user(data.id_user)
          this._AuthService.set_role(data.role)
        }
      })
  }

}
