import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { TobbarComponent } from './tobbar/tobbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { TeacherComponent } from './teacher/teacher.component';
import { FeaturesareaComponent } from './featuresarea/featuresarea.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [HomeComponent,TobbarComponent,NavbarComponent,SlideshowComponent,TeacherComponent,FeaturesareaComponent, NotfoundComponent],
  imports: [
    CommonModule
  ],
  exports:[HomeComponent,NotfoundComponent]
})
export class ViewModule { }
