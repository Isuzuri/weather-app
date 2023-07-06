import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() public tableHead: string[] = [];
  @Input() public tableBody: string[][] = [];
  public additionalLeftTitle: string[] = ['Time', '', 'Forecast', 'Temp (C)', 'RealFeel', 'Wind (km/h)'];

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit()
  }

  async ngOnInit() {
    setTimeout(() => {
      let fuckingImages: any = document.querySelectorAll('td')
        fuckingImages.forEach((e: HTMLElement, i: number) => {
          if (e.innerText.includes('<img src')) {
           fuckingImages[i].innerHTML = fuckingImages[i].innerText
          }
        })
    }, 0)
  }
}
