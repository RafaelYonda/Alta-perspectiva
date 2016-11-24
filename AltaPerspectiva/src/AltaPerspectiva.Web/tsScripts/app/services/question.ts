import { QuestionerUser } from './questioneruser';
import { QuestionAnswer } from './questionanswer';
import { User } from './models';

/// <reference path="questionanswer.ts" />
export class Question {
    id: string;
    title: string;
    subTitle: string;
    questionBody: string;
    questionTime: string;
    date: Date;
    responseCount: string;
    answers: QuestionAnswer[];
    questioner: QuestionerUser;
    user:User
}