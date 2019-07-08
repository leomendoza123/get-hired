import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Person, Questions } from 'src/app/types';

@Injectable({
  providedIn: 'root'
})
export class UserSignUpService {

  person: Person = {};
  personId: string;

  constructor(private db: AngularFirestore) {
    this.getQuestions('angular');
  // this.addQuestion();
  }


  initUser(){
    this.db.collection('/users').add(this.person).then(data => {
      this.personId = data.id;
    });
  }
  getQuestions(type: 'angular' | 'react') {
      this.db.collection('/campaign/react-angular/tests/angular/questions' ).valueChanges().subscribe(data=>{
        console.log (data.forEach(x => {
          console.log(x.value)
          x.answers.forEach(element => {
            console.log(element)
            
          });
        }))
      })
  }

  /// TEMP

  temp: [Questions]
 

  addQuestion  () {
    this.temp = [
      {
        id :1,
        value: "Can multiple a Behavioral subject have multiple observers?",
        answers: [
          { 
            id: '1',
            value: 'Heck yeah!'
          },
          { 
            id: '2',
            value: 'No way'
          },
          { 
            id: '3',
            value: 'Only when the subscribers are inside a service'
          },
          { 
            id: '4',
            value: 'Only when the observer '
          }
        ]
        
      },
      {
        id :2,
        value: "If you want to reduce the total size of your application, improve security and have a faster render what would you use? ",
        answers: [
          { 
            id: '1',
            value: 'AOT compilation will do it!'
          },
          { 
            id: '2',
            value: 'JIT compilation is the best!'
          },
          { 
            id: '3',
            value: 'RFID compilation for sure!'
          },
          { 
            id: '4',
            value: 'NAN compilation is what you need'
          }
        ]
        
      },
      {
        id :3,
        value: "What’s lazy loading?",
        answers: [
          { 
            id: '1',
            value: 'Is loading every module on the first load so the application can remain lazy for the rest of its life cycle'
          },
          { 
            id: '2',
            value: 'Is loading just what you need, when you need it because the application is too lazy to load everything at once'
          },
          { 
            id: '3',
            value: 'Is loading the application slowly for testing purposes'
          },
          { 
            id: '4',
            value: 'Is loading a lightweight version of the application for the less powerful devices'
          }
        ]
        
      },

    ]
    this.temp.forEach(x=> {
      this.db.collection('/campaign/react-angular/tests/angular/questions').add(x)
      .then(data => {
      console.log (data)
    })
    })
    
  }

}
