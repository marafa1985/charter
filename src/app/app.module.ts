import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { BusListModule } from './components/bus-list/bus-list.module';
import { BusFormModule } from './components/bus-form/bus-form.module';
import { StationFormModule } from './components/station-form/station-form.module';
import { StationListModule } from './components/station-list/station-list.module';
import { MatTabsModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StationFormModule,
    FormsModule,
    BusFormModule,
    BusListModule,
    MatDialogModule,
    StationListModule,
    MatTabsModule,
    RouterModule,
    MatToolbarModule
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
