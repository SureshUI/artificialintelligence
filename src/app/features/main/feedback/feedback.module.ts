import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule, FeedbackRoutingComponents } from './feedback-routing.module';


@NgModule({
  declarations: [FeedbackRoutingComponents],
  imports: [
    CommonModule,
    FeedbackRoutingModule
  ]
})
export class FeedbackModule { }
