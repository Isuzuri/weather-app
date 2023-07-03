import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.scss']
})
export class HourlyComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    this.hourlyWeather = changes['hourlyWeather'].currentValue;
    this.tableBody = this.hourlyWeather;
  }
  @Input() hourlyWeather: any = [];

  tableBody: any = this.hourlyWeather;
}
