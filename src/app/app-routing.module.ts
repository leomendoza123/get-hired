import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

  {
    path: '',
    component:  AppComponent
  },
  {
  path: 'forms',
  loadChildren: './forms/forms.module#FormsModule',
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
