import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { FormsModule } from '@angular/forms';
import { AppHighlightDirective } from './directives/app-highlight.directive';
import { ReversePipe } from './pipes/reverse.pipe';
import { SerachTextPipe } from './pipes/serach-text.pipe';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RoomChildComponent } from './room-child/room-child.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { EmployeeComponent } from './employee/employee.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    AppHighlightDirective,
    ReversePipe,
    SerachTextPipe,
    RoomChildComponent,
    EmployeeComponent,
    NotFoundComponent,
    RoomListComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule

  ],
  providers: [{
    provide:APP_SERVICE_CONFIG,
    useValue:APP_CONFIG
  },
{
  provide:HTTP_INTERCEPTORS,
  useClass:ResquestInterceptor,
  multi:true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }import { ResquestInterceptor } from 'src/Interceptor/resquest.interceptor';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';



