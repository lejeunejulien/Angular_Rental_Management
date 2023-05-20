import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  status!:any[]



  constructor() { }

  setStatus(test: any) {
    this.status=test
    console.log(this.status)
  }
}
