import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploadfeedbackComponent } from './uploadfeedback/uploadfeedback.component';


const routes: Routes = [
  
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'feedback',
    component: UploadfeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
export const MainRoutingComponents = [HomeComponent, UploadfeedbackComponent];
