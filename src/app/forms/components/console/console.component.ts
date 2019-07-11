import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/core/form/form.service';
import { Questions } from 'src/app/types';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.sass']
})
export class ConsoleComponent implements OnInit {

  questions: Questions[];
  


  constructor(private form: FormService) {
    window['start'] = () => this.start();
    window['answer'] = () => this.answer();
    window['getRandomElement'] = () => this.answer();
  }

  ngOnInit(){
  }

  start () {
    console.log ('...');
    this.form.getQuestions('angular').subscribe((data: Questions[]) => {
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
