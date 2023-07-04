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

  public placeholder: string = 'Paris'

  ngOnInit() {
    this.setWeather()
  }
  setWeather() {
    this.todayService.setCurrentWeather(this.placeholder);
    this.todayService.setHourlyWeather(this.placeholder);
    this.fiveDayService.setWeather(this.placeholder);
  }
}
