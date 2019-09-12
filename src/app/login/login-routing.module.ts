import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ConfirmComponent } from './pages/confirm/confirm.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'confirm',
    component: ConfirmComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
