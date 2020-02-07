import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Question } from "src/app/types";
import { TEST_QUESTIONS } from "./test-data";

@Injectable({
  providedIn: "root"
})
export class FormAdminService {
  constructor(private db: AngularFirestore) {
    //this.addQuestion(TEST_QUESTIONS);
  }

  addQuestion(temp: Question[]) {
    temp.forEach(question => {
      this.db
        .collection("/campaign/avantica/test/angular/question")
        .add(question)
        .then(data => {
          console.log(data);
        });
    });
  }
}
