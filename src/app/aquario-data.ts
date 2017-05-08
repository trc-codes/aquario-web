export class AquarioData {
  currentTime: string;
  currentDate: string;
  currentDay: string;
  currentTankTemp: string;
  id: string
  currentLightsSchedule: LightSchedule[];
  currentCo2Schedule: Co2Schedule[];
}

export class LightSchedule {
  type: string;
  day: string;
  firstStartTime: string;
  firstStopTime: string;
  secondStartTime: string;
  secondStopTime: string;
}

export class Co2Schedule {
  type: string;
  day: string;
  firstStartTime: string;
  firstStopTime: string;
  secondStartTime: string;
  secondStopTime: string;
}
