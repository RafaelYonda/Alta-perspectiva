import { Injectable } from '@angular/core';
import { Category } from './category';
import { Question } from './question';
import { QuestionerUser } from './questioneruser';
import { QuestionAnswer } from './questionanswer';

@Injectable()
export class QuestionAnswerService{
    getQuestionByCategory(categoryId: string): Question[] {
        return [
            {
                id: '1',
                title: 'title-1',
                subTitle: 'subTitle-1',
                questionBody: 'questionBody-1',
                questionTime: 'questionTime-1',
                responseCount: '100',
                answers: [
                    { answerid: 'answerid-1', questionid: '1', title: 'title-1', answer: 'answer-1' },
                    { answerid: 'answerid-2', questionid: '1', title: 'title-2', answer: 'answer-2' },
                    { answerid: 'answerid-3', questionid: '1', title: 'title-3', answer: 'answer-3' }
                ],
                questioner: { userid: 'userid', name: 'name', title: 'title', icon: 'icon' }
            },
            {
                id: '2',
                title: 'title-2',
                subTitle: 'subTitle-2',
                questionBody: 'questionBody-2',
                questionTime: 'questionTime-2',
                responseCount: '100',
                answers: [
                    { answerid: 'answerid-4', questionid: '2', title: 'title-1', answer: 'answer-1' },
                    { answerid: 'answerid-5', questionid: '2', title: 'title-2', answer: 'answer-2' },
                    { answerid: 'answerid-6', questionid: '2', title: 'title-3', answer: 'answer-3' }
                ],
                questioner: { userid: 'userid', name: 'name', title: 'title', icon: 'icon' }
            }
        ];
    }
}