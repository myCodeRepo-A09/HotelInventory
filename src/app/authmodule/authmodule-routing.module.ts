import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './authcomponent/sign-up/sign-up.component';
import { LoginComponent } from './authcomponent/login/login.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AuthcomponentComponent } from './authcomponent/authcomponent.component';

const routes: Routes = [
  {path:'',component:AuthcomponentComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'login',component:LoginComponent},
    

  
  //{path:'',redirectTo:'avianhotels',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthmoduleRoutingModule { }
