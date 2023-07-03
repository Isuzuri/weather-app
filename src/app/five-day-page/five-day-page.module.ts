import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiveDayPageComponent } from './five-day-page.component';
import { OneDayComponent } from './one-day/one-day.component';
import { SharedModule } from '../shared/shared.module';
import { HourlyComponent } from './hourly/hourly.component';



@NgModule({
  declarations: [
    FiveDayPageComponent,
    OneDayComponent,
    HourlyComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FiveDayPageComponent,
    OneDayComponent,
    HourlyComponent
  ]
})
export class FiveDayPageModule { }
