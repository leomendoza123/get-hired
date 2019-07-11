import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { ConsoleComponent } from './components/console/console.component';
import { FormPageComponent } from './pages/form-page/form-page.component';

@NgModule({
  declarations: [
    ConsoleComponent,
    FormPageComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
