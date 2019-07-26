import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Person } from 'src/app/types';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  person: Person = {};
  personId: string;

  constructor(private db: AngularFirestore, private _auth: AngularFireAuth) {
  }

  initUser() {
    this.db.collection('/users').add(this.person).then(data => {
      this.personId = data.id;
    });
  }


}
