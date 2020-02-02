import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StationList } from 'src/app/models/station';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-station-form',
  templateUrl: './station-form.component.html',
  styleUrls: ['./station-form.component.scss']
})
export class StationFormComponent {
  newUuid: number;
  // min '0' to add a new station, add later the user can add slots
  numberOfSlots = new FormControl(0, [Validators.required, Validators.min(0)]);
  constructor(
    public addStationRef: MatDialogRef<StationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StationList) {
      this.newUuid = data.getNextStationUUID();
  }

  onNewStationClick() {
    if (this.numberOfSlots.errors === null) {
      this.data.addNewStation(this.numberOfSlots.value);
      this.addStationRef.close();
    }
  }
  getErrorMessage() {
    return this.numberOfSlots.hasError('required') ? 'You must enter a value' :
      this.numberOfSlots.hasError('min') ? 'The slots can not be negative' :
        '';
  }
  onNoClick(): void {
    this.addStationRef.close();
  }

}
