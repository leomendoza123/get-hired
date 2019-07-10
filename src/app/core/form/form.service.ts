import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Questions } from 'src/app/types';

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
