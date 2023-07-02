import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiveDayPageComponent } from './five-day-page.component';
import { OneDayComponent } from './one-day/one-day.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FiveDayPageComponent,
    OneDayComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FiveDayPageComponent,
    OneDayComponent
  ]
})
export class FiveDayPageModule { }
