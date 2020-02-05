import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusFormComponent } from './components/bus-form/bus-form.component';
import { BusListComponent } from './components/bus-list/bus-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/busList', pathMatch: 'full' },
  { path: 'busList', component: BusListComponent },
  { path: 'busForm', component: BusFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
