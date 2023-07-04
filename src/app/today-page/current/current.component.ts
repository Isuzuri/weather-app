import { Component, Input } from '@angular/core';
import { TodayInterface } from 'src/app/entities/interfaces';

@Component({
  selector: 'current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent {
  public title: string = 'Current Weather';
  public additionalInfo: Date = new Date();
  
  @Input() weather: TodayInterface.CurrentWeather = {
    date: new Date(),
    icon: '',
    desc: '',
    temp: 0,
    feelsLike: 0,
    sunrise: new Date(),
    sunset: new Date(),
    lengthOfDay: '0'
  };
}
