import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlansComponent } from '../app/components/plans/plans.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdvanceTrainingComponent } from './components/advance-training/advance-training.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'plans',
    component: PlansComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'advance-training',
    component: AdvanceTrainingComponent,
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
