import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { RecaptchaComponent } from './components/recaptcha/recaptcha.component';
import { LoginComponent } from './pages/login/login.component';
import { PhoneComponent } from './components/phone/phone.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RecaptchaComponent, LoginComponent, PhoneComponent],
  imports: [
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
