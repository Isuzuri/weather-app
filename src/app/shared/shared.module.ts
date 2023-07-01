import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTitleComponent } from './card-title/card-title.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TableComponent } from './table/table.component';





@NgModule({
  declarations: [
    CardTitleComponent,
    NavigationBarComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardTitleComponent,
    NavigationBarComponent,
    TableComponent
  ]
})
export class SharedModule { }
