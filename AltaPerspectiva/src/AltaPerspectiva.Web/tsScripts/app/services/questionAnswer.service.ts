import { Injectable } from '@angular/core';
import { Category } from './category';
import { Question } from './question';
import { QuestionerUser } from './questioneruser';
import { QuestionAnswer } from './questionanswer';
import {QuestionMenu, User, Answer} from './models';

@Injectable()
export class QuestionAnswerService{
    getQuestionByCategory(categoryId: string): Question[] {
        if (categoryId == '1') {
            return [
                {
                    id: '1',
                    title: 'lorem ipsum dolor sit amet title-1',
                    subTitle: 'Usuario, Descripcion de usuario',
                    questionBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam elementum consectetur. Nam sem sem, tincidunt sit amet congue et, venenatis in massa. Nunc massa lectus, vulputate in diam vel, euismod ornare purus. Curabitur vitae turpis quis quam imperdiet facilisis. In lacinia interdum velit, vel tempus mauris tempus id. Vestibulum ullamcorper lacus id dictum scelerisque. Fusce id nulla accumsan, tincidunt mi vel, facilisis diam. Nullam rhoncus, nibh eget tempus posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam elementum consectetur. Nam sem sem, tincidunt sit amet congue et, venenatis in massa. Nunc massa lectus, vulputate in diam vel, euismod ornare purus. Curabitur vitae turpis quis quam imperdiet facilisis. In lacinia interdum velit, vel tempus mauris tempus id. Vestibulum ullamcorper lacus id dictum scelerisque. Fusce id nulla accumsan, tincidunt mi vel, facilisis diam. Nullam rhoncus, nibh eget tempus posuere',
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
                    title: 'lorem ipsum dolor sit amet title-2',
                    subTitle: 'Usuario, Descripcion de usuario ',
                    questionBody: 'questionBody-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam elementum consectetur. Nam sem sem, tincidunt sit amet congue et, venenatis in massa. Nunc massa lectus, vulputate in diam vel, euismod ornare purus. Curabitur vitae turpis quis quam imperdiet facilisis. In lacinia interdum velit, vel tempus mauris tempus id. Vestibulum ullamcorper lacus id dictum scelerisque. Fusce id nulla accumsan, tincidunt mi vel, facilisis diam. Nullam rhoncus, nibh eget tempus posuere',
                    questionTime: 'questionTime-2',
                    responseCount: '100',
                    answers: [
                        { answerid: 'answerid-4', questionid: '2', title: 'title-1', answer: 'answer-1' },
                        { answerid: 'answerid-5', questionid: '2', title: 'title-2', answer: 'answer-2' },
                        { answerid: 'answerid-6', questionid: '2', title: 'title-3', answer: 'answer-3' }
                    ],
                    questioner: { userid: 'userid', name: 'questioner-name-2', title: 'title', icon: 'icon' }
                },
                {
                    id: '100',
                    title: 'lorem ipsum dolor sit amet title-2',
                    subTitle: 'Usuario, Descripcion de usuario ',
                    questionBody: 'questionBody-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam elementum consectetur. Nam sem sem, tincidunt sit amet congue et, venenatis in massa. Nunc massa lectus, vulputate in diam vel, euismod ornare purus. Curabitur vitae turpis quis quam imperdiet facilisis. In lacinia interdum velit, vel tempus mauris tempus id. Vestibulum ullamcorper lacus id dictum scelerisque. Fusce id nulla accumsan, tincidunt mi vel, facilisis diam. Nullam rhoncus, nibh eget tempus posuere',
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
                    title: 'lorem ipsum dolor sit amet title-3',
                    subTitle: 'Usuario, Descripcion de usuario',
                    questionBody: 'questionBody-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam elementum consectetur. Nam sem sem, tincidunt sit amet congue et, venenatis in massa. Nunc massa lectus, vulputate in diam vel, euismod ornare purus. Curabitur vitae turpis quis quam imperdiet facilisis. In lacinia interdum velit, vel tempus mauris tempus id. Vestibulum ullamcorper lacus id dictum scelerisque. Fusce id nulla accumsan, tincidunt mi vel, facilisis diam. Nullam rhoncus, nibh eget tempus posuere',
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
                    title: 'lorem ipsum dolor sit amet title-4',
                    subTitle: 'Usuario, Descripcion de usuario',
                    questionBody: 'questionBody-4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam elementum consectetur. Nam sem sem, tincidunt sit amet congue et, venenatis in massa. Nunc massa lectus, vulputate in diam vel, euismod ornare purus. Curabitur vitae turpis quis quam imperdiet facilisis. In lacinia interdum velit, vel tempus mauris tempus id. Vestibulum ullamcorper lacus id dictum scelerisque. Fusce id nulla accumsan, tincidunt mi vel, facilisis diam. Nullam rhoncus, nibh eget tempus posuere',
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

    getQuestionListByString(searchParam: string): QuestionMenu[] {
        var questionList: QuestionMenu[] = [];
        for (var i = 0; i < 4; i++) {
            var x: QuestionMenu = {
                id: i,
                questiontext: 'This is question ' + i,
                questionDetails: 'This is question Details' + i
            };
            questionList.push(x);
        }
        return questionList;
    }
    getAnswersByQuestion(id: number): Answer[] {
        var answerList: Answer[] = [];
        for (var i:number = 0; i < 4; i++) {
            var x: Answer = {
                id: i,
                questionId: id,
                user: { userid: 1, name: 'Rafael Yonda', occupassion: 'Industrial engineer', imageUrl: "../../../../images/avatar.png" },
                answerText: 'Answer for question' + i + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam elementum consectetur. Nam sem sem, tincidunt sit amet congue et, venenatis in massa. Nunc massa lectus, vulputate in diam vel, euismod ornare purus. Curabitur vitae turpis quis quam imperdiet facilisis. In lacinia interdum velit, vel tempus mauris tempus id. Vestibulum ullamcorper lacus id dictum scelerisque. Fusce id nulla accumsan, tincidunt mi vel, facilisis diam. Nullam rhoncus, nibh eget tempus posuere',
                date: new Date(),
                topics:'Strategy'
            };
            answerList.push(x);
        }
        return answerList;
    }
}