import { Component} from '@angular/core';
import { FiveDayService } from '../services/five-day.service';
import { TodayService } from '../services/today.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private todayService: TodayService, private fiveDayService: FiveDayService) {}
  setWeather() {
    let city = returnCity();
    this.todayService.setCurrentWeather(city);
    this.todayService.setHourlyWeather(city);
    this.fiveDayService.setWeather(city);

    function returnCity() {
      let input = document.getElementById('city') as HTMLInputElement;
      return input.value.split('')[0].toUpperCase() + input.value.slice(1).toLowerCase()
    }
  }
}
