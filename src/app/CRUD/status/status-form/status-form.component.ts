import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusService } from 'src/app/services/status/status.service';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.scss']
})
export class StatusFormComponent {

  status_form : FormGroup = this._formBuilder.group({
    status : ['',[Validators.required]],
    start_date: ['',[Validators.required]],
    start_time:['',[Validators.required]],
    end_date: ['',[Validators.required]],
    end_time:['',[Validators.required]]
  })

  constructor(private __StatusService: StatusService, private _formBuilder : FormBuilder ){}


update_status() {
throw new Error('Method not implemented.');
}
create_status() {
throw new Error('Method not implemented.');
}

}
