import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiveDayPageComponent } from './five-day-page/five-day-page.component';
import { TodayPageComponent } from './today-page/today-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'today', pathMatch: 'full' },
  { path: 'today', component: TodayPageComponent},
  { path: 'five-day', component: FiveDayPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
