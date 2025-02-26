import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomListComponent } from './rooms/room-list/room-list.component';

import { AuthcomponentComponent } from './authmodule/authcomponent/authcomponent.component';
import { AuthmoduleModule } from './authmodule/authmodule.module';

const routes: Routes = [
  {path:'avianhotels',
    loadChildren:()=>import('./authmodule/authmodule.module').then(m=>m.AuthmoduleModule)
  },
  {path:'rooms',component:RoomsComponent},
  {path:'rooms/:id',component:RoomListComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'',redirectTo:'avianhotels',pathMatch:'full'},
  
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
