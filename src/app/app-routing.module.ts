import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'rooms',component:RoomsComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'rooms/:id',component:RoomListComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'',redirectTo:'rooms',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
