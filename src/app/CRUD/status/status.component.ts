import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusService } from 'src/app/services/status/status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {

  status : FormGroup = this._formBuilder.group({
    status : ['',[Validators.required]],
    //checking for dates
    startDate: ['',[Validators.required]],
    endDate:[0,[Validators.required]]

  })

  constructor(private __StatusService: StatusService, private _formBuilder : FormBuilder ){}

update_status() {
throw new Error('Method not implemented.');
}
create_status() {
throw new Error('Method not implemented.');
}

}
