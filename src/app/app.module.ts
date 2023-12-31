import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodayPageModule } from './today-page/today-page.module';
import { FiveDayPageModule } from './five-day-page/five-day-page.module';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { TodayService } from './services/today.service';
import { LogService } from './services/log.service';
import { FiveDayService } from './services/five-day.service';
import { FormsModule } from '@angular/forms';
import { PageNotExistComponent } from './page-not-exist/page-not-exist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotExistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodayPageModule,
    FiveDayPageModule,
    SharedModule,
    FormsModule
  ],
  providers: [TodayService, LogService, FiveDayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
