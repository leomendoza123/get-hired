import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.sass']
})
export class RecaptchaComponent implements OnInit {
  captcha: firebase.auth.RecaptchaVerifier
  @Output() newCaptcha: EventEmitter<firebase.auth.RecaptchaVerifier> = new EventEmitter();
  @Output() captchaSolve: EventEmitter<any> = new EventEmitter();
  @Output() captchaExpire: EventEmitter<any> = new EventEmitter();


  constructor(private _us: UserService) {
    
   }
  ngOnInit() {
    this.captcha = this.initCaptcha('recaptcha-container')
    this.captcha.render() 
    this.newCaptcha.next(this.captcha)
  }

  initCaptcha (elementId) {
    return this.captcha = new firebase.auth.RecaptchaVerifier(elementId, {
      'size': 'normal',
      'callback': (response) => {
        console.log ('callback ', response)
        this.captchaSolve.next(true)
      },
      'expired-callback': (response) => {
        console.log ('expired ', response)

        this.captchaExpire.next(true)
      }
    });
  }
}
