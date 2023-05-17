import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vhform',
  templateUrl: './vhform.component.html',
  styleUrls: ['./vhform.component.scss']
})

export class VHFormComponent {

  vh_form : FormGroup = this._formBuilder.group({

  })

update_properties() {
throw new Error('Method not implemented.');
}
create_properties() {
throw new Error('Method not implemented.');
}

  /*

  export const REQUEST_FORM = {
  userLogin: [,[Validators.required]],
  justification: [, [Validators.required]],
  neededCapacity: [, [Validators.required, Validators.min(5)]],
  date: [, daysInFuture(3)],
  beginAt: [],
  endAt: [],
  materialIds: new FormArray<FormControl>([]),
  additionalNotes: []
}

  */


}
