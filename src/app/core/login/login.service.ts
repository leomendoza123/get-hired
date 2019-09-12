import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  captcha: firebase.auth.RecaptchaVerifier
  captchaState: boolean
  confirmationResult: firebase.auth.ConfirmationResult

  constructor(private _fa: AngularFireAuth) { }
  
  

  declareCaptchaReference (captcha) {
    this.captcha = captcha
  }

  loginState(){
    return this._fa.authState
  }
  
  loginWithPhoneNumber(number) {
    this._fa.auth.signInWithPhoneNumber(number, this.captcha).then(
      (confirmationResult) =>{
        if (confirmationResult) {
           // SMS sent. Prompt user to type the code from the message, then sign the
           // user in with confirmationResult.confirm(code).
           console.log (confirmationResult)
           this.confirmationResult = confirmationResult
        } else {
         console.log ("responds null", confirmationResult)
        }
   }).catch( (error) => {
     console.log("error "+ error)
     // Error; SMS not sent
     // ...
   });
  }

  confirmPhoneNumber (code) {
    console.log (code)
    this.confirmationResult.confirm(code).then(value=> {
      console.log(value)
    })
  }
  
}
