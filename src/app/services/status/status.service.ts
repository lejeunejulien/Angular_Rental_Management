import { Injectable } from '@angular/core';
import { Status_model } from 'src/app/models/status_model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private statusUpdate:any|null[]=null

  constructor() { }

  setStatus(test: any) {
    this.statusUpdate=test
    console.log(this.statusUpdate)
  }

  getStatus():any|null{
    return this.statusUpdate
  }
}
