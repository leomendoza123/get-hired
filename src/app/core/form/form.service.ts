import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private db: AngularFirestore) {
   }

   getQuestions(type: 'angular' | 'react') {
      return this.db.collection('/campaign/react-angular/tests/angular/questions' ).valueChanges()
  }

}
