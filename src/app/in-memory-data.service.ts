import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let aquarioData = [
      {currentTime: '22:22', currentDate: '10.03.2017', currentDay: 'Friday', currentTankTemp: '25'}
    ];

    let currentLightsSchedule = [
        {day: "Monday", startTime1: "06:00", endTime1: "10:00", startTime2: "16:00", endTime2: "22:00"},
        {"day": "Tuesday", "startTime1": "06:00", "endTime1": "10:00", "startTime2": "16:00", "endTime2": "22:00"},
        {"day": "Wednesday", "startTime1": "06:00", "endTime1": "10:00", "startTime2": "16:00", "endTime2": "22:00"},
        {"day": "Thursday", "startTime1": "06:00", "endTime1": "10:00", "startTime2": "16:00", "endTime2": "22:00"},
        {"day": "Friday", "startTime1": "06:00", "endTime1": "10:00", "startTime2": "16:00", "endTime2": "22:00"},
        {"day": "Saturday", "startTime1": "08:00", "endTime1": "12:00", "startTime2": "18:00", "endTime2": "23:00"},
        {"day": "Sunday", "startTime1": "08:00", "endTime1": "12:00", "startTime2": "18:00", "endTime2": "23:00"}
    ];

    let currentCo2Schedule = [
        {"day": "Monday", "startTime1": "06:00", "endTime1": "10:00", "startTime2": "16:00", "endTime2": "22:00"},
        {"day": "Tuesday", "startTime1": "06:00", "endTime1": "10:00", "startTime2": "16:00", "endTime2": "22:00"},
        {"day": "Wednesday", "startTime1": "06:00", "endTime1": "10:00", "startTime2": "16:00", "endTime2": "22:00"},
        {"day": "Thursday", "startTime1": "06:00", "endTime1": "10:00", "startTime2": "16:00", "endTime2": "22:00"},
        {"day": "Friday", "startTime1": "06:00", "endTime1": "10:00", "startTime2": "16:00", "endTime2": "22:00"},
        {"day": "Saturday", "startTime1": "08:00", "endTime1": "12:00", "startTime2": "18:00", "endTime2": "23:00"},
        {"day": "Sunday", "startTime1": "08:00", "endTime1": "12:00", "startTime2": "18:00", "endTime2": "23:00"}
    ];
    return {aquarioData, currentLightsSchedule, currentCo2Schedule};
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
