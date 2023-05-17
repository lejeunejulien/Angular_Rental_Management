import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category/category.service';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent {

  category : FormGroup = this._formBuilder.group({
    brand : ['',[Validators.required]],
    model: ['',[Validators.required]],
    idPrice:[0,[Validators.required]]

  })

  constructor(private __CategoryService: CategoryService, private _formBuilder : FormBuilder ){}

update_category() {
throw new Error('Method not implemented.');
}
create_category() {
throw new Error('Method not implemented.');
}

}
