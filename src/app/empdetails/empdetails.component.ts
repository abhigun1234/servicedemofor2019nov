import { Component, OnInit } from '@angular/core';
import {EmpService} from '..//emp.service'
@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
  empDetails
  constructor(private empService :EmpService) { }

  ngOnInit() {
    this.empDetails=this.empService.getEmpDetails()
  }

 

}
