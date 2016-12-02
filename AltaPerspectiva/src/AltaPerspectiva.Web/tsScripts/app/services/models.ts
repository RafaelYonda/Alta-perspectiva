export class QuestionMenu {
    id: number;
    questiontext: string;
    questionDetails: string;
}

export class User {
    userid: number;
    name: string;
    occupassion: string;
    imageUrl: string;
}
export class LogInObj {
    notifyCount: number;
    user: User;
    isLoggedIn: boolean;
}
export class Category {
    id: number;
    name: string;
    icon: string;
    active: string;
}
export class Comment {
    id: number;
    user: User;
    commentText: string;
    time: Date;
}
export class Question {
    id: string;
    title: string;    
    body: string;
    categoryIds: string[];    
    likeCount: number;
    commentCount: number;
    comments: Comment[];
    date: Date;
    responseCount: string;
    user: User;
    answers: Answer[];
    answerCount: number
    constructor() {
        this.user = new User();
        this.answers = new Array();
        this.comments = new Array();
        this.categoryIds = new Array();
    }
}

export class AskQuestionViewModel {
    title: string;
    body: string;
    categoryId: number;

    constructor(_title: string, _detials: string, _categoryId: number) {
        this.title = _title;
        this.body = _detials;
        this.categoryId = _categoryId;
    }
}

export class Answer {
    id: number;
    questionId: number;
    user: User;
    answerText: string;
    date: Date;
    likeCount: number;
    commentCount: number;
    comments: Comment[];
}

export class AnswerViewModel {
    text: string;
    questionId: string;   
}


//========Profile Objects===========
export class Profile {
    contact: Contact;
    biography: Biography;
    education: Education;
    experience: Experience;
    skills: Skills;
    practiceArea: PracticeArea;
    insight: Insight;
}
export class Contact {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address1: string;
    address2: string;
    country: string;
    region: string;
    city: string;
}
export class Biography {
    tagLine: string;
    aboutMe: string;
}
export class Education { }
export class Experience { }
export class Skills { }
export class PracticeArea { }
export class Insight { }
//================..Profile Objects..


export class DateName {
    getMonthName(month: number):string {
       var  monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
       return monthNames[month];
    }
}