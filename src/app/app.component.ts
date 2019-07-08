import { Component } from '@angular/core';
import { UserSignUpService } from './core/user-sign-up/user-sign-up.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'get-hire';
  constructor(_userSignUp: UserSignUpService) {
    
  }
}
