import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.scss']
})
export class HourlyComponent implements OnChanges{
  title = 'Hourly';
  
  @Input() weather: any = [];
  
  tableBody: string[][] = this.weather;

  ngOnChanges(changes: SimpleChanges): void {    
    this.tableBody = changes['weather'].currentValue;
  }
}
