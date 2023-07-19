import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayPageComponent } from './today-page.component';
import { CurrentComponent } from './current/current.component';
import { HourlyComponent } from './hourly/hourly.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TodayPageComponent,
    CurrentComponent,
    HourlyComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TodayPageComponent,
    CurrentComponent,
    HourlyComponent
  ]
})
export class TodayPageModule { }
