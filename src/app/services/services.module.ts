import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevComponent } from '../dev/dev.component';
import { HomeComponent } from '../home/home.component';
import { CloudComponent } from '../cloud/cloud.component';



@NgModule({
  declarations: [
    DevComponent,
    HomeComponent,
    CloudComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ServicesModule { }
