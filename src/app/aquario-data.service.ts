import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AquarioData } from './aquario-data';

@Injectable()
export class AquarioDataService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private aquarioDataUrl = 'http://localhost:5050/api/aquarioData';  // URL to web api

  constructor(private http: Http) { }

  getAquarioData(): Promise<AquarioData[]> {
    return this.http.get(this.aquarioDataUrl)
              .toPromise()
              .then(response => {return response.json() as AquarioData[];})
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}



/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

