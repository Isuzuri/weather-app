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

  async ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {   
      this.setCity(position.coords.latitude, position.coords.longitude)
    })
    this.setWeather()
  }
  setWeather() {
    this.todayService.setCurrentWeather(this.placeholder);
    this.todayService.setHourlyWeather(this.placeholder);
    this.fiveDayService.setWeather(this.placeholder);
  }

  async setCity(lat: number, lon: number) {
    const city = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a8d6480edb4735dd39b1b37f0993ebc2`).then(res => res.json());
    this.placeholder = await city.name;    
    localStorage.setItem('city', this.placeholder);
  }
}
