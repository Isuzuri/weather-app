import { Component, Input } from '@angular/core';

@Component({
  selector: 'one-day',
  templateUrl: './one-day.component.html',
  styleUrls: ['./one-day.component.scss']
})
export class OneDayComponent {
  @Input() oneDayWeather: any = {}
}
