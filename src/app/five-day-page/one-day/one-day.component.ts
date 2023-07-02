import { Component, Input } from '@angular/core';

@Component({
  selector: 'one-day',
  templateUrl: './one-day.component.html',
  styleUrls: ['./one-day.component.scss']
})
export class OneDayComponent {
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() icon: string = '';
  @Input() temp: number = 0;
  @Input() description: string = '';
}
