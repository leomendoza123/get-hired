import { Component, OnInit, ViewRef, ChangeDetectorRef } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { PhoneNumber } from 'google-libphonenumber';
import { LoginService } from 'src/app/core/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  captchaState: boolean
  phoneNumber: PhoneNumber

  constructor( private viewRef: ChangeDetectorRef, public _ls: LoginService) {

    this._ls.loginState().subscribe (state => {
      console.log (state)
    })
   }

  ngOnInit() {
  }

  captchaSolve() {
    this.captchaState = true
  }

  captchaExpire(){
    this.captchaState = false;
  }

  login() {
    let number = '+' + this.phoneNumber.getCountryCode() + this.phoneNumber.getNationalNumber();
    this._ls.loginWithPhoneNumber(number)
  }

}
