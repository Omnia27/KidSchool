import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
const route:Routes=[
  {path:'',
  component:AuthComponent,
  children:
        [
          {
            path:'',
            redirectTo:'login',
            pathMatch:'full'
            
          },
          {
            path:'login',
            component:LoginComponent,
            data:{returnUrl:window.location.pathname}
          },
          {
          path:'register',
          component:RegisterComponent
         
          }
  
         ]




}
  
];

@NgModule({
  declarations: [LoginComponent, AuthComponent,RegisterComponent],
  imports: [
    CommonModule,
   
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule 
  ]
  ,
  exports:[AuthComponent, FormsModule,
    ReactiveFormsModule, CustomFormsModule ]
})
export class AuthModule { 


  static forRoot(): ModuleWithProviders {
		return {
			ngModule: AuthModule,
			providers: [
				
			]
		};
	}
}
