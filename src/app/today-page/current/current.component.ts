import { Component } from '@angular/core';
import { getWeather } from 'src/app/helpers/getWeather';

@Component({
  selector: 'current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent {
  // public weather = getWeather()
}
