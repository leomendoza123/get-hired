import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseuiAngularLibraryService } from 'firebaseui-angular';
import * as firebase from 'firebase';
import { UserService } from './core/user/user.service';
import { FormAdminService } from './core/form-admin/form-admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'get-hire';

  constructor(_fas: FormAdminService) {
  }
}
