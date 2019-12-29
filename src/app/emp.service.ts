import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  empDetails=[{id:1,name:"ravi",email:"ravi@gamil.com"},
  {id:2,name:"ram",email:"ram@gamil.com"},
  {id:3,name:"raj",email:"raj@gamil.com"}
 ]
  constructor() { }

  getEmpDetails()
  {
    return this.empDetails
  }
}
