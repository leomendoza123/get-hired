import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  captchaSolve: boolean
  captcha: firebase.auth.RecaptchaVerifier
  confirmationResult: firebase.auth.ConfirmationResult

  constructor(private _fa: AngularFireAuth) { }

  ngOnInit() {
    
  }

  declareCaptchaReference (captcha) {
    console.log('WE GOT IT ', captcha)
    this.captcha = captcha
  }

  login() { 
    this._fa.auth.signInWithPhoneNumber('', this.captcha).then(
       (confirmationResult) =>{
         if (confirmationResult) {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            this.confirmationResult = confirmationResult
         } else {
          confirmationResult
         }
    }).catch( (error) => {
      console.log("error "+ error)
      // Error; SMS not sent
      // ...
    });
  }
  confirm () {
    this.confirmationResult.confirm("asd")
  }

}
