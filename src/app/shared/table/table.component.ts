import { Component, Input } from '@angular/core';

type image = {value: string, isImage: boolean}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() public tableHead: string[] = [];
  @Input() public tableBody: (string | image)[][] = [];
  public additionalLeftTitle: string[] = ['Time', '', 'Forecast', 'Temp (°C)', 'RealFeel (°C)', 'Wind (km/h)'];

  getSrc(item: string | image ) {
    if (typeof item !== 'string' && typeof item !== 'number') {
      return `https://openweathermap.org/img/wn/${item.value}.png`
    } else return ''
  }
}
