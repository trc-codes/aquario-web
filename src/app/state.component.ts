import { Component } from '@angular/core';
import { AquarioData } from './aquario-data';
import { AquarioDataService } from './aquario-data.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  providers: [ AquarioDataService ]
})

export class StateComponent {
  aquarioData: AquarioData[];

  constructor(
    private aquarioDataService: AquarioDataService) { }

  getAquarioData(): void {
    this.aquarioDataService
        .getAquarioData()
        .then(response => this.aquarioData = response);
  }

  ngOnInit(): void {
    this.getAquarioData();
  }
}
