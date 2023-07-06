import { Component, DoCheck, OnInit } from '@angular/core';
import { FiveDayService } from '../services/five-day.service';

@Component({
  selector: 'five-day-page',
  templateUrl: './five-day-page.component.html',
  styleUrls: ['./five-day-page.component.scss']
})
export class FiveDayPageComponent implements OnInit, DoCheck {
  constructor (private fiveDayService: FiveDayService) {}
  public dailyWeather: any;
  public hourlyWeather: any;
  
  ngDoCheck(): void {
    this.dailyWeather = this.fiveDayService.getWeather()
  }

  async ngOnInit() {
    // await this.fiveDayService.setWeather()
    // let weather = this.fiveDayService.getWeather()
    // this.dailyWeather = weather[0]
    // this.hourlyWeather = weather[1]
  }

  showHourly(event: any) {
    this.hourlyWeather = this.fiveDayService.setHourlyWeather(target());

    function target() {
      if (event.target.nodeName === 'ONE-DAY') {
        return event.target.childNodes[0].innerText
      } else if (event.target.tagName === 'IMG') {
        return event.target.parentElement.parentElement.childNodes[0].innerText
      } else return event.target.parentElement.childNodes[0].innerText;
    }
  }
}
