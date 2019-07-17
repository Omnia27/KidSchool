import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { TeacherComponent } from './views/teacher/teacher.component';


const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    
    path:'auth',loadChildren:'./auth/auth.module#AuthModule'
  }
,

{
  path:'**', component:NotfoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
