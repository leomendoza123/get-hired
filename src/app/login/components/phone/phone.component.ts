import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { PhoneValidator } from './phone.validator';
import { PhoneNumber } from 'google-libphonenumber';
import { PhoneNumberUtil } from 'google-libphonenumber';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.sass']
})
export class PhoneComponent implements OnInit {
  @Output() phoneNumber: EventEmitter<PhoneNumber> = new EventEmitter();
  emailFormControl = new FormControl('', {
    validators: [
    Validators.required,
    PhoneValidator.validCostaRicaPhone,
  ]});
  phoneUtil: PhoneNumberUtil
  matcher = new MyErrorStateMatcher();

  constructor() { 
    this.phoneUtil = new PhoneNumberUtil()
  }


  ngOnInit() {

  this.emailFormControl.valueChanges.subscribe(value => {
    if (!this.emailFormControl.errors) {
      let number = this.phoneUtil.parseAndKeepRawInput(value, 'CR')
      this.phoneNumber.emit(number)
    } else {
      this.phoneNumber.emit(null)
    }
    
  })
  }


}
