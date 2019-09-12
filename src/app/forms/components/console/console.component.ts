import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/core/form/form.service';
import { Question } from 'src/app/types';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.sass']
})
export class ConsoleComponent implements OnInit {

  questions: Question[];
  


  constructor(private form: FormService) {
    window['start'] = () => this.start();
    window['answer'] = () => this.answer();
    window['getRandomElement'] = () => this.answer();
  }

  ngOnInit(){
  }

  start () {
    console.log ('...');
    this.form.getQuestions('angular').subscribe((data: Question[]) => {
      console.log ('OK we are ready!');
      console.log (data);
    });

  }

  private getNextQuestion () {
  }

  answer() {
  }

  finish() {
  }

}
