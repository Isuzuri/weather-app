import { Component } from '@angular/core';

@Component({
  selector: 'helpers',
  templateUrl: './helpers.component.html',
  styleUrls: ['./helpers.component.scss']
})
export class HelpersComponent {
  static async getGeopos(city: string) {
    const geoPosition = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=a8d6480edb4735dd39b1b37f0993ebc2`).then(res => res.json());
    return {lat: geoPosition[0].lat, lon: geoPosition[0].lon};
  }

  static getWeekDay(date: Date){
    let weekDay = date.getDay();
    const weekDayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekDayList[weekDay];
  }

  static getDate(date: Date){
    let month = date.getMonth();
    let day = date.getDate();
    const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${monthList[month]} ${day}`;
  }

  static getRightTime(time: Date) {
    const hours = time.getHours() 
    const minutes = time.getMinutes()
    if (minutes < 10) {
        return `${hours}:0${minutes}`
    } else return `${hours}:${minutes}`
  }

  static getLengthOfDay(sunset: number, sunrise: number) {
    const lengthOfDay = sunset - sunrise;
    const hours = Math.floor(lengthOfDay / 3600);
    const minutes = Math.floor((lengthOfDay % 3600) / 60);
    return `${hours}h ${minutes}m`;
  }

  static getWorldSide(degree: number) {
    switch (true) {
      case degree >= 0 && degree < 45: return "N";
      case degree >= 45 && degree < 90: return "NE";
      case degree >= 90 && degree < 135: return "E";
      case degree >= 135 && degree < 180: return "SE";
      case degree >= 180 && degree < 225: return "S";
      case degree >= 225 && degree < 270: return "SW";
      case degree >= 270 && degree < 315: return "W";
      case degree >= 315 && degree < 360: return "NW";
      case degree === 360: return "N";
      default: return " "
    }
  }
}
