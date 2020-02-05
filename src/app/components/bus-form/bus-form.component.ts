import { Component, OnInit } from '@angular/core';
import { StationList, Station } from 'src/app/models/station';
import { StationFormComponent } from '../station-form/station-form.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { StationListComponent, IStationList } from '../station-list/station-list.component';
import { BusList } from 'src/app/models/bus';
import { CharterService } from 'src/app/service/charter.service';

@Component({
  selector: 'app-bus-form',
  templateUrl: './bus-form.component.html',
  styleUrls: ['./bus-form.component.scss']
})
export class BusFormComponent implements OnInit {
  stationList: StationList = new StationList();
  busList: BusList = new BusList();
  numberOfSlots = new FormControl(0, [Validators.required, Validators.min(0)]);
  constructor(public stationDialog: MatDialog,
              public stationListDialog: MatDialog,
              public charterService: CharterService) {
    this.charterService.getDataFromLocalStorage().then(() => {
      this.stationList = charterService.stationList;
      this.busList = charterService.busList;
    });

  }

  ngOnInit() {
  }
  openAddStationDialog() {
    const stationDialog = this.stationDialog.open(StationFormComponent, {
      disableClose: true,
      width: '50%',
      data: this.stationList
    });
    stationDialog.afterClosed().subscribe(() => {
      this.charterService.saveDataToLocalStorage();
    });
  }
  openStationListDialog(station: Station) {
    const dataDialog: IStationList = {
      stationId: station.uuid,
      busList: this.busList
    };
    const stationDialog = this.stationDialog.open(StationListComponent, {
      disableClose: true,
      width: '50%',
      data: dataDialog
    });
    stationDialog.afterClosed().subscribe(() => {
      station.updateStationBusesList(this.busList.getBusByStationID(station.uuid));
      this.charterService.saveDataToLocalStorage();
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
      this.charterService.saveDataToLocalStorage();
    }
  }
}
