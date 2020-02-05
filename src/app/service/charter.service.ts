import { Injectable } from '@angular/core';
import { StationList } from '../models/station';
import { BusList } from '../models/bus';

interface CharterData {
  stationList: StationList;
  busList: BusList;
}
@Injectable({ providedIn: 'root' })
export class CharterService {
  stationList = new StationList();
  busList = new BusList();

  saveData(): CharterData {
    return {
      stationList: this.stationList,
      busList: this.busList
    };
  }

  saveDataToLocalStorage() {
    localStorage.removeItem('charter');
    localStorage.setItem('charter', JSON.stringify(this.saveData()));
  }

  getDataFromLocalStorage(): Promise<CharterData> {
    return new Promise((resolve, reject) => {
      const charterFromLocalStorage = localStorage.getItem('charter');
      if (charterFromLocalStorage !== null) {
        const charterData: CharterData = JSON.parse(charterFromLocalStorage);
        this.stationList = new StationList([...charterData.stationList.stationList]);
        this.busList = new BusList([...charterData.busList.busList]);
        resolve(charterData);
      }
      reject();
    });
  }
}
