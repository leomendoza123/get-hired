import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
  path: 'forms',
  loadChildren: './forms/forms.module#FormsModule',
},
{
  path: 'login',
  loadChildren: './login/login.module#LoginModule',
},
{
  path: '**',
  redirectTo: '/',
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
