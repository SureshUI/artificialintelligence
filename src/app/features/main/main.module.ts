import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule, MainRoutingComponents } from './main-routing.module';
import { UploadfeedbackComponent } from './uploadfeedback/uploadfeedback.component';


@NgModule({
  declarations: [MainRoutingComponents, UploadfeedbackComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
