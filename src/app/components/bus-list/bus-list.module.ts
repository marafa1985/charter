import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusListComponent } from './bus-list.component';
import { MatSelectModule, MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    BusListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgxDatatableModule
  ],
  exports: [
    BusListComponent
  ]
})
export class BusListModule { }
