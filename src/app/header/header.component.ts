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
  private API_KEY = "a8d6480edb4735dd39b1b37f0993ebc2";

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
    const city = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.API_KEY}`).then(res => res.json());
    this.placeholder = await city.name;
    this.setWeather(this.placeholder);
  }
}
