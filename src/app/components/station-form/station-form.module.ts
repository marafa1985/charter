import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationFormComponent } from './station-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StationFormComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  entryComponents: [StationFormComponent]
})
export class StationFormModule { }
