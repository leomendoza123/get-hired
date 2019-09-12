import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { PhoneValidator } from '../../components/phone/phone.validator';
import { LoginService } from 'src/app/core/login/login.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.sass']
})
export class ConfirmComponent implements OnInit {
  confirmationNumber = new FormControl('', {
    validators: [
    Validators.required,
    Validators.maxLength(6),
    Validators.minLength(6)
  ]});
  matcher = new MyErrorStateMatcher();

  constructor(public _ls: LoginService) { }

  ngOnInit() {
  }

  confirm() {
    this._ls.confirmPhoneNumber(this.confirmationNumber.value)

  }

}
