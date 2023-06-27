import { Component, Input } from '@angular/core';

@Component({
  selector: 'current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent {
  title: string = 'Current Weather';
  additionalInfo: Date = new Date();
}
