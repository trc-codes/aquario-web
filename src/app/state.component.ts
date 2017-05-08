import { Component, OnInit } from '@angular/core';
import { AquarioData } from './aquario-data';
import { AquarioDataService } from './aquario-data.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html'
})
export class StateComponent implements OnInit {
  aquarioData: AquarioData[];

  constructor(
    private aquarioDataService: AquarioDataService) { }

  getAquarioData(): void {
    this.aquarioDataService
        .getAquarioData()
        .then(aquarioData => this.aquarioData = aquarioData);
  }

  ngOnInit(): void {
    this.getAquarioData();
  }
}
