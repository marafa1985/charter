import { Component, OnInit } from '@angular/core';
import { StationList, Station } from 'src/app/models/station';
import { StationFormComponent } from '../station-form/station-form.component';
import { MatDialog } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { StationListComponent, IStationList } from '../station-list/station-list.component';
import { BusList } from 'src/app/models/bus';

@Component({
  selector: 'app-bus-form',
  templateUrl: './bus-form.component.html',
  styleUrls: ['./bus-form.component.scss']
})
export class BusFormComponent implements OnInit {
  stationList = new StationList();
  busList = new BusList();
  numberOfSlots = new FormControl(0, [Validators.required, Validators.min(0)]);
  constructor(public stationDialog: MatDialog, public stationListDialog: MatDialog) { }

  ngOnInit() {
  }
  openAddStationDialog() {
    this.stationDialog.open(StationFormComponent, {
      disableClose: true,
      width: '50%',
      data: this.stationList
    });
  }
  openStationListDialog(stationId: number) {
    const dataDialog: IStationList = {
      stationId,
      busList: this.busList
    };
    this.stationDialog.open(StationListComponent, {
      disableClose: true,
      width: '50%',
      data: dataDialog
    });
  }
  getErrorMessage() {
    return this.numberOfSlots.hasError('required') ? 'You must enter a value' :
      this.numberOfSlots.hasError('min') ? 'The slots can not be negative' :
        '';
  }
  updateSlots(station: Station, numberOfSlots: number) {
    if (this.numberOfSlots.errors === null) {
      station.setSlotsNumber(numberOfSlots);
    }
  }
}
