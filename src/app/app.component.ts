import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navBarList = ['Today', '5-day forecast'];
  public routeLinkList = ['today', 'five-day'];
}

