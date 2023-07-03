import { Component, OnInit } from '@angular/core';
import { TodayInterface } from 'src/app/entities/interfaces';
import { TodayService } from 'src/app/services/today.service';

@Component({
  selector: 'current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
  public title: string = 'Current Weather';
  public additionalInfo: Date = new Date();
  
  weather: TodayInterface.CurrentWeather = {
    date: new Date(),
    icon: '',
    desc: '',
    temp: 0,
    feelsLike: 0,
    sunrise: new Date(),
    sunset: new Date(),
    lengthOfDay: '0'
  };

  constructor (private todayService: TodayService) {} 

  // FOR TEST
  ngOnInit() {
    // setTimeout(() => {
    //   this.weather = this.todayService.getCurrentWeather();
    // }, 1000);
  }
}
