import { Component, OnInit } from '@angular/core';
import { TodayService } from './services/today.service';
import { FiveDayForecastInterface, TodayInterface } from './entities/interfaces';
import { FiveDayService } from './services/five-day.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public navBarList = ['Today', '5-day forecast']
  
  constructor (private todayService: TodayService, private fiveDayService: FiveDayService) {}

  todaySetCurrentWeather(city: string = 'London') {
    this.todayService.setCurrentWeather(city);
  }

  todaySetHourlyWeather(city: string = 'London'){
    this.todayService.setHourlyWeather(city);
  }

  todaySetNearlyWeather(city: string = 'London'){
    this.todayService.setNearbyWeather(city);
  }

  fiveDaySetFiveDayWeather(city: string = 'London'){
    this.fiveDayService.setWeather(city);
  }
  // FOR TEST
  async ngOnInit() {
    this.todaySetCurrentWeather();
    this.todaySetHourlyWeather()
    this.fiveDaySetFiveDayWeather()
  }
}

