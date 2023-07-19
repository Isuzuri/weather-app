import { Component, OnInit} from '@angular/core';
import { FiveDayService } from '../services/five-day.service';
import { TodayService } from '../services/today.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private todayService: TodayService, private fiveDayService: FiveDayService) {}

  public placeholder: string = ''

  ngOnInit() {
    this.setWeather('Tokyo')
    navigator.geolocation.getCurrentPosition(position => {   
      this.setWeatherByGeolocation(position.coords.latitude, position.coords.longitude);
    })
  }

  setWeather(city: string) {
    this.todayService.setCurrentWeather(city.split('')[0]);
    this.todayService.setHourlyWeather(city.split('')[0]);
    this.fiveDayService.setWeather(city.split('')[0]);
    this.placeholder = city;
  }

  async setWeatherByGeolocation(lat: number, lon: number) {
    const city = await this.todayService.getCity(lat, lon);
    this.placeholder = await city;
    this.setWeather(this.placeholder);
  }
}
