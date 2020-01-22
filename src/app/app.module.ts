import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationFormComponent } from './components/station-form/station-form.component';
import { StationListComponent } from './components/station-list/station-list.component';
import { BusListComponent } from './components/bus-list/bus-list.component';
import { BusFormComponent } from './components/bus-form/bus-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StationFormComponent,
    StationListComponent,
    BusListComponent,
    BusFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
