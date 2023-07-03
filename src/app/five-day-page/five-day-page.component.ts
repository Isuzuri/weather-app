import { Component, OnInit } from '@angular/core';
import { FiveDayService } from '../services/five-day.service';

@Component({
  selector: 'five-day-page',
  templateUrl: './five-day-page.component.html',
  styleUrls: ['./five-day-page.component.scss']
})
export class FiveDayPageComponent implements OnInit {
  constructor (private fiveDayService: FiveDayService) {}
  public dailyWeather: any;
  public hourlyWeather: any;

  async ngOnInit() {
    setTimeout(() => {
      let weather = this.fiveDayService.getWeather()
      this.dailyWeather = weather[0]
      this.hourlyWeather = weather[1]
    }, 1000)
  }

  setHourly(event: any) {
    return this.fiveDayService.setHourlyWeather(event)
  }

  showHourly(event: any) {
    this.hourlyWeather = this.setHourly(target());

    function target() {
      if (event.target.tagName === 'IMG') {
        return event.target.parentElement.parentElement.childNodes[0].innerText
      } else return event.target.parentElement.childNodes[0].innerText;
    }
  }
}
