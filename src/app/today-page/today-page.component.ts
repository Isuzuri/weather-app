import { Component, Input } from '@angular/core';

@Component({
  selector: 'today-page',
  templateUrl: './today-page.component.html',
  styleUrls: ['./today-page.component.scss']
})
export class TodayPageComponent {
  @Input() currentWeather: any;
  show() {
    console.log(this.currentWeather); 
  }
}