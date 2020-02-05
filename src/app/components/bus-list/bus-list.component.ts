import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CharterService } from 'src/app/service/charter.service';
import { BusType, Bus } from 'src/app/models/bus';
import { StationList } from 'src/app/models/station';


export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.scss']
})
export class BusListComponent {
  stationSelectedList: number[] = [];
  busTypeSelectedList: BusType[] = [];
  stationList: StationList = new StationList();
  busList: Bus[] = [];
  busTypes: BusType;
  dataSource: Bus[];
  plateNumber: string;
  constructor(public addBusDialog: MatDialog, public charterService: CharterService) {
    this.charterService.getDataFromLocalStorage().then(() => {
      this.stationList = charterService.stationList;
      this.busList = charterService.busList.busList;
      this.dataSource = this.busList;
    });
  }

  filterBusTable() {
    this.dataSource = this.busList;
    // filter by station
    if (this.stationSelectedList.length > 0) {
      this.dataSource = this.dataSource.filter((bus) => this.stationSelectedList.indexOf(bus.station) >= 0);
    }
    if (this.busTypeSelectedList.length > 0) {
      this.dataSource = this.dataSource.filter((bus) => this.busTypeSelectedList.indexOf(bus.busType) >= 0);
    }
    if (this.plateNumber !== null && this.plateNumber !== '') {
      this.dataSource = this.dataSource.filter((bus) => bus.plate.includes(this.plateNumber));
    }

  }
}
