import { Component } from '@angular/core';

@Component({
  selector: 'card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss']
})
export class CardTitleComponent {
  public title!: string;
  public additionalInfo?: Date;
}
