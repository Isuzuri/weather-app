import { Component, Input } from '@angular/core';

@Component({
  selector: 'current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent {
  @Input() title: string = 'Current Weather';
  @Input() additionalInfo: Date = new Date();
}
