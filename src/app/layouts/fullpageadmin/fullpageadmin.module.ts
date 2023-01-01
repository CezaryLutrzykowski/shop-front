import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageadminComponent } from './fullpageadmin.component';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class FullpageadminModule { }
