import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() public tableHead: string[] = [];
  @Input() public tableBody: string[][] = [];
  @Input() public additionalLeftTitle: string[] = [];

  async ngOnInit() {
    setTimeout(() => {
      if (this.additionalLeftTitle.length > 0) {
        this.addLeftTitle(this.additionalLeftTitle);
        let fuckingImages: any = document.querySelectorAll('td')
        fuckingImages.forEach((e: HTMLElement, i: number) => {
          if (e.innerText.includes('<img src')) {
           fuckingImages[i].innerHTML = fuckingImages[i].innerText
          }
        })
      }
    }, 700)
    
  }

  addLeftTitle(titleArray: string[]) {
    this.tableBody.map((e, i) => {
      e.unshift(titleArray[i]);
    })
  }
}
