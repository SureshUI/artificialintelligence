import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploadfeedbackComponent } from './uploadfeedback/uploadfeedback.component';
import { IntroComponent } from './intro/intro.component';
import { ProcessComponent } from './process/process.component';
import { ResultComponent } from './result/result.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: UploadfeedbackComponent
      },
      {
        path: 'feedback',
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
  },
  {
    path: 'intro',
    component: IntroComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
export const MainRoutingComponents = [HomeComponent, UploadfeedbackComponent, ProcessComponent, ResultComponent, IntroComponent];
