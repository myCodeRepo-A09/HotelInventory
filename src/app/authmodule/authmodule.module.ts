import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthmoduleRoutingModule } from './authmodule-routing.module';
import { AuthcomponentComponent } from './authcomponent/authcomponent.component';
import { ForgotPasswordComponent } from './authcomponent/forgot-password/forgot-password.component';
//import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AuthcomponentComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthmoduleRoutingModule,
    //BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule, MatToolbarModule,  MatListModule ,MatSnackBarModule
  ]
})
export class AuthmoduleModule { }
