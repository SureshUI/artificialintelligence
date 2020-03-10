import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { UploadfeedbackComponent } from './uploadfeedback/uploadfeedback.component';
import { IntroComponent } from './intro/intro.component';
// import { ProcessComponent } from './process/process.component';
// import { ResultComponent } from './result/result.component';



const routes: Routes = [
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then(mod => mod.FeedbackModule)
  },
  {
    path: 'intro',
    component: IntroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
export const MainRoutingComponents = [IntroComponent];
