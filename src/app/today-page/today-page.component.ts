import { Component } from '@angular/core';
import { TodayService } from '../services/today.service';
import { TodayInterface } from '../entities/interfaces';

@Component({
  selector: 'today-page',
  templateUrl: './today-page.component.html',
  styleUrls: ['./today-page.component.scss']
})
export class TodayPageComponent  {
  constructor(private todayService: TodayService) {}
  
  public currentWeather: TodayInterface.CurrentWeather = {
    date: new Date(),
    icon: '',
    desc: '',
    temp: 0,
    feelsLike: 0,
    sunrise: new Date(),
    sunset: new Date(),
    lengthOfDay: '0'
  }
}