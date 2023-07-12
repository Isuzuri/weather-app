import { Component, Input } from '@angular/core';

@Component({
  selector: 'nearby',
  templateUrl: './nearby.component.html',
  styleUrls: ['./nearby.component.scss']
})
export class NearbyComponent {
  title = 'Nearby';
  @Input() weather: any;
}
