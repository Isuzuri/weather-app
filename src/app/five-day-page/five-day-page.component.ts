import { Component, DoCheck, OnInit } from '@angular/core';
import { FiveDayService } from '../services/five-day.service';

@Component({
  selector: 'five-day-page',
  templateUrl: './five-day-page.component.html',
  styleUrls: ['./five-day-page.component.scss']
})

export class FiveDayPageComponent implements DoCheck, OnInit {
  constructor (private fiveDayService: FiveDayService) {}
  public dailyWeather: any;
  public hourlyWeather: any;
  
  ngDoCheck(): void {
    this.dailyWeather = this.fiveDayService.getWeather()
  }

  ngOnInit(): void {
    const intervalId = setInterval(() => {
      const target = document.querySelector('.oneDay');
      if (target) {
        target.dispatchEvent(new MouseEvent('click'));
        clearInterval(intervalId);
      }
    }, 10);
  }

  showHourly(event: any) {
    document.querySelectorAll('.oneDay').forEach(element => {
      element.classList.remove('active')
    })
    
    const target = () => {
      if (event.target.nodeName === 'ONE-DAY') {
        event.target.classList.add('active')
        return event.target.childNodes[0].innerText
      } else if (event.target.tagName === 'IMG') {
        event.target.parentElement.parentElement.classList.add('active')
        return event.target.parentElement.parentElement.childNodes[0].innerText
      } else {
        event.target.parentElement.classList.add('active')
        return event.target.parentElement.childNodes[0].innerText;
      } 
    }

    this.hourlyWeather = this.fiveDayService.getHourlyWeather(target());
  }
}
