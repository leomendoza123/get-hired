import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Person } from 'src/app/types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  person: Person = {};
  personId: string;

  constructor(private db: AngularFirestore) {
  }


  initUser() {
    this.db.collection('/users').add(this.person).then(data => {
      this.personId = data.id;
    });
  }
}
