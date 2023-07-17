import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiveDayPageComponent } from './five-day-page/five-day-page.component';
import { TodayPageComponent } from './today-page/today-page.component';
import { PageNotExistComponent } from './page-not-exist/page-not-exist.component';

const routes: Routes = [
  { path: '', redirectTo: 'today', pathMatch: 'full' },
  { path: 'today', component: TodayPageComponent},
  { path: 'five-day', component: FiveDayPageComponent},
  { path: 'error', component: PageNotExistComponent},
  { path: '**', redirectTo: 'today', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
