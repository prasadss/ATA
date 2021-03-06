import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlansComponent } from './components/plans/plans.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CountUpModule } from 'ngx-countup';
import { AdvanceTrainingComponent } from './components/advance-training/advance-training.component';
@NgModule({
  declarations: [
    AppComponent,
    PlansComponent,
    HomeComponent,
    CoursesComponent,
    AboutUsComponent,
    AdvanceTrainingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CountUpModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
