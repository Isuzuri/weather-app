import { Component, OnInit } from '@angular/core';
import { TodayService } from 'src/app/services/today.service';

@Component({
  selector: 'hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.scss']
})
export class HourlyComponent implements OnInit {
  title = 'Hourly';
  weather: any = [];
  tableBody: string[][] = [];
  additionalLeftTitle: string[] = [];

  constructor(private todayService: TodayService) {}

  // FOR TEST
  async ngOnInit() {
    setTimeout(() => {
      this.weather = this.todayService.getHourlyWeather();
      console.dir(this.weather);
      this.additionalLeftTitle = ['TODAY', '', 'Forecast', 'Temp (C)', 'RealFeel', 'Wind (km/h)'];
      this.tableBody = this.weather;
    }, 500);
  }
}
