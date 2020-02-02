import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusFormComponent } from './bus-form.component';
import { MatInputModule, MatExpansionModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToNumberPipe } from 'src/app/pipe/toNumber';



@NgModule({
  declarations: [
    BusFormComponent,
    ToNumberPipe
  ],
  entryComponents: [
    BusFormComponent
  ],
  exports: [BusFormComponent],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class BusFormModule { }
