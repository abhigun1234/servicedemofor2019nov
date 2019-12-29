import { Component, OnInit } from '@angular/core';
import {EmpService} from '..//emp.service'
@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  empDetails
  constructor(private empService :EmpService) { }

  ngOnInit() {
    this.empDetails=this.empService.getEmpDetails()
  }
  
 
}
