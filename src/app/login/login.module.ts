import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { RecaptchaComponent } from './components/recaptcha/recaptcha.component';
import { LoginComponent } from './pages/login/login.component';
import { PhoneComponent } from './components/phone/phone.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './pages/confirm/confirm.component';


@NgModule({
  declarations: [RecaptchaComponent, LoginComponent, PhoneComponent, ConfirmComponent],
  imports: [
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
