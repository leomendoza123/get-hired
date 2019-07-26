import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
  path: 'forms',
  loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
},
{
  path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
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
