import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HeaderComponent } from './header/header.component';
import { CardTitleComponent } from './card-title/card-title.component';
import { TodayPageModule } from './today-page/today-page.module';
import { FiveDayPageModule } from './five-day-page/five-day-page.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HeaderComponent,
    CardTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodayPageModule,
    FiveDayPageModule
  ],
  providers: [],
  exports: [
    CardTitleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
