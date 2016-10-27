import { Injectable } from '@angular/core';
import { Category } from './category';
import { Question } from './question';
import { QuestionerUser } from './questioneruser';
import { QuestionAnswer } from './questionanswer';

@Injectable()
export class QuestionAnswerService{
    getQuestionByCategory(categoryId: string): Question[] {
        if (categoryId == '1') {
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
                    questioner: { userid: 'userid', name: 'questioner-name-1', title: 'title', icon: 'icon' }
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
                    questioner: { userid: 'userid', name: 'questioner-name-2', title: 'title', icon: 'icon' }
                }
            ];
        }
        else {
            return [
                {
                    id: '3',
                    title: 'title-3',
                    subTitle: 'subTitle-3',
                    questionBody: 'questionBody-3',
                    questionTime: 'questionTime-3',
                    responseCount: '100',
                    answers: [
                        { answerid: 'answerid-1', questionid: '3', title: 'title-1', answer: 'answer-1' },
                        { answerid: 'answerid-2', questionid: '3', title: 'title-2', answer: 'answer-2' },
                        { answerid: 'answerid-3', questionid: '3', title: 'title-3', answer: 'answer-3' }
                    ],
                    questioner: { userid: 'userid', name: 'questioner-name-3', title: 'title', icon: 'icon' }
                },
                {
                    id: '4',
                    title: 'title-4',
                    subTitle: 'subTitle-4',
                    questionBody: 'questionBody-4',
                    questionTime: 'questionTime-4',
                    responseCount: '150',
                    answers: [
                        { answerid: 'answerid-4', questionid: '4', title: 'title-1', answer: 'answer-1' },
                        { answerid: 'answerid-5', questionid: '4', title: 'title-2', answer: 'answer-2' },
                        { answerid: 'answerid-6', questionid: '4', title: 'title-3', answer: 'answer-3' }
                    ],
                    questioner: { userid: 'userid', name: 'questioner-name-4', title: 'title', icon: 'icon' }
                }
            ];
        }
    }
}