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
    completePercent: number;
}
export class Contact {
    userId: string;
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
    userId: string;
    tagLine: string;
    aboutMe: string;
}
export class Education {
    userId: string;
    institute: string;
    startDate: Date;
    endDate: Date;
    studyStatus: boolean;
    description: string;
    especiality: string;
}
export class Experience {
    userId: string;
    employer: string;
    positionHeld: string;
    employerLocation: string;
    startMonth: number;
    startYear: number;
    endMonth: number;
    endYear: number;
    currentlyWorking: boolean;
    description: string;
}
export class Skills {
    userId: string;
    skillArea: string[];
    newSkill: string;
}
export class PracticeArea {
    userId: string;
    practiceArea: string[];
    newPracticeArea: string;
}
export class Insight {
    userId: string;
    title: string;
    publication: string;
    dateMonth: number;
    dateYear: number;
    isHyperLink: boolean;
    isDocument: boolean;
    documentLink: string;
    description: string;
}
//================..Profile Objects..
export class DateName {
     monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
}