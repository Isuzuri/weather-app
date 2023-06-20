import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayPageComponent } from './today-page.component';
import { CurrentComponent } from './current/current.component';
import { HourlyComponent } from './hourly/hourly.component';
import { NearbyComponent } from './nearby/nearby.component';
import { CardTitleComponent } from '../card-title/card-title.component';



@NgModule({
  declarations: [
    TodayPageComponent,
    CurrentComponent,
    HourlyComponent,
    NearbyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodayPageComponent,
    CurrentComponent,
    HourlyComponent,
    NearbyComponent
  ]
})
export class TodayPageModule { }
