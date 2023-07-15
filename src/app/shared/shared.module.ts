import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTitleComponent } from './card-title/card-title.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TableComponent } from './table/table.component';
import { RouterModule } from '@angular/router';
import { HelpersComponent } from './helpers/helpers.component';


@NgModule({
  declarations: [
    CardTitleComponent,
    NavigationBarComponent,
    TableComponent,
    HelpersComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardTitleComponent,
    NavigationBarComponent,
    TableComponent,
    HelpersComponent
  ]
})
export class SharedModule { }
