import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() weatherInfo: any;
  titleList = ['TODAY', '', 'Forecast', 'Temp (°C)', 'RealFeel', 'Wind (kh/h)']

  async ngOnInit() {
    setTimeout(() => {
      
    }, 700)
  }
}
