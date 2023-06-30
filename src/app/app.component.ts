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

  todaySetHourlyWeather(hourly: TodayInterface.Hourly[]){
    this.todayService.setHourlyWeather(hourly);
  }

  todaySetNearlyWeather(nearly: TodayInterface.Nearly[]){
    this.todayService.setNearlyWeather(nearly);
  }

  fiveDaySetOneDayWeather(oneDayWeather: FiveDayForecastInterface.Day[]){
    this.fiveDayService.setOneDayWeather(oneDayWeather);
  }

  fiveDaySetHourlyWeather(hourlyWeather: FiveDayForecastInterface.Hourly[]){
    this.fiveDayService.setHourlyWeather(hourlyWeather);
  }
  // FOR TEST
  async ngOnInit() {
    this.todaySetCurrentWeather();
  }
}

