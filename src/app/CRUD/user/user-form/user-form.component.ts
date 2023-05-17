import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  user : FormGroup = this._formBuilder.group({
    last_name : ['',[Validators.required]],
    first_name: ['',[Validators.required]],
    username:['',[Validators.required]],
    password:['',[Validators.required]]
  })

  constructor(private __UserService: UserService, private _formBuilder : FormBuilder ){}

  create_user(){
  }

  update_user(){

  }


}
