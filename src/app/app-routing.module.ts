import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmpdetailsComponent} from './empdetails/empdetails.component'
import {EmplistComponent} from './emplist/emplist.component'
const routes: Routes = [{path:'emdetails',component:EmpdetailsComponent},


{path:'emplist',component:EmplistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
