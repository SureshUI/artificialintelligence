import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback.component';
import { UploadfeedbackComponent } from './uploadfeedback/uploadfeedback.component';
import { ProcessComponent } from './process/process.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
  {
    path: '',
    component: FeedbackComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: '',
            component: UploadfeedbackComponent
          },
          {
            path: 'uploadfeedback',
            component: UploadfeedbackComponent
          },
          {
            path: 'process',
            component: ProcessComponent
          },
          {
            path: 'result',
            component: ResultComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
export const FeedbackRoutingComponents = [FeedbackComponent, HomeComponent, UploadfeedbackComponent, ProcessComponent, ResultComponent];
