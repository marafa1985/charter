import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BusList, BusType } from 'src/app/models/bus';
import { FormControl, Validators } from '@angular/forms';

export interface IStationList {
  busList: BusList;
  stationId: number;
}
@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss']
})
export class StationListComponent {
  plateNumber = new FormControl('', [
    Validators.pattern('[0-9a-zA-Z][0-9a-zA-Z][0-9a-zA-Z]-[0-9a-zA-Z][0-9a-zA-Z][0-9a-zA-Z]'),
    Validators.required,
    Validators.maxLength(7),
    Validators.minLength(7)
  ]);
  busType = new FormControl('', [Validators.required]);
  constructor(
    public addStationRef: MatDialogRef<StationListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IStationList) {
  }
  getPlateNumberErrorMessage() {
    if (this.plateNumber.errors) {
      return 'The plate should match (BUS-XXX-XXX). where X is an alpha-numeric character';
    }
    return '';
  }
  getBusTypeErrorMessage() {
    return this.plateNumber.hasError('required') ? 'Please select Bus Type' : '';
  }
  onNewBusClicked() {
    if (this.busType.errors === null && this.plateNumber.errors === null) {
      this.data.busList.addBus(this.busType.value, this.busType.value, this.data.stationId);
    }
    if (this.busType.errors) {
      this.busType.markAsTouched();
    }
    if (this.plateNumber.errors) {
      this.busType.markAsTouched();
    }
  }
  onNoClick(): void {
    this.addStationRef.close();
  }
}
