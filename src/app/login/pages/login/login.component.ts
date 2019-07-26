import { Component, OnInit, ViewRef, ChangeDetectorRef } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { PhoneNumber } from 'google-libphonenumber';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  captchaState: boolean
  captcha: firebase.auth.RecaptchaVerifier
  confirmationResult: firebase.auth.ConfirmationResult
  phoneNumber: PhoneNumber

  constructor(private _fa: AngularFireAuth, private viewRef: ChangeDetectorRef) { }

  ngOnInit() {
    
  }

  declareCaptchaReference (captcha) {
    console.log('WE GOT IT ', captcha)
    this.captcha = captcha
  }

  login() { 
    let number = '+' + this.phoneNumber.getCountryCode() + this.phoneNumber.getNationalNumber();
    this._fa.auth.signInWithPhoneNumber(number, this.captcha).then(
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

  captchaSolve() {
    console.log ("SOLVE")
    this.captchaState = true
    this.viewRef.detectChanges()
  }

  captchaExpire(){
    this.captchaState = false;
  }

}
