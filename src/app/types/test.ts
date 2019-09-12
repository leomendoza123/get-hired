import { Question, Answer } from "./questions";

export interface Test {
  subject: string;
  finished: boolean;
  lastSendQuestion: Question;
  questions?: Question[];
  score?: number;
  startDate: Date;
  finishDate: Date;
}
