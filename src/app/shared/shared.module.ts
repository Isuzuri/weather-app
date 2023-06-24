import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTitleComponent } from './card-title/card-title.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';





@NgModule({
  declarations: [
    CardTitleComponent,
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardTitleComponent,
    NavigationBarComponent
  ]
})
export class SharedModule { }
