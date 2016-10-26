import { QuestionerUser } from './questioneruser';
import { QuestionAnswer } from './questionanswer';

/// <reference path="questionanswer.ts" />
export class Question {
    id: string;
    title: string;
    subTitle: string;
    questionBody: string;
    questionTime: string;
    responseCount: string;
    answers: QuestionAnswer[];
    questioner: QuestionerUser;
}