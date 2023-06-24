import { Component, Output, EventEmitter} from '@angular/core';
import { getWeather } from '../helpers/getWeather';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() weatherEvent = new EventEmitter();
  currentWeather: any;
  sendCurrentWeather(): void{
    let inputValue = (document.getElementById('city') as HTMLInputElement).value || 'London';
    this.currentWeather = getWeather(inputValue);
    this.weatherEvent.emit(this.currentWeather);
  }
}
