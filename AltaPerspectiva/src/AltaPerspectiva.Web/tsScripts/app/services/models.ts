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
    user: User;
    isLoggedIn: boolean;
}
export class TotalCount {
    totalUsers: number;
    totalQuestions: number;
}

export class Category {
    id: string;
    name: string;
    icon: string;
    image: string;
    active: string;
    description: string;
    sequence: number;   
}

export class CacheCategory
{
    /// cache data for later user
    _data: Category[];
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
}

export class Comment {
    id: string;
    questionId: string;
    answerId: string;
    user: User;
    commentText: string;    
}

export class Config {
    categoryImage: string;
    profileImage: string;    
}

export class Like {
    id: string;
    questionId: string;
    answerId: string;
    userId: string;
}

export class Question {
    id: string;
    title: string;    
    body: string;
    categoryIds: string[];
    likes: Like[];
    commentCount: number;
    comments: Comment[];
    date: Date;    
    user: User;
    answers: AnswerViewModel[];
    lastAnswer: AnswerViewModel;
    shareUrl: string;
    viewCount: number;  
    createdOn:Date;
    constructor() {
        this.user = new User();
        this.answers = new Array();
        this.comments = new Array();
        this.categoryIds = new Array();
        this.lastAnswer = new AnswerViewModel();
        this.likes = new Array();
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


export class Keyword {
    Id: number;
    text: string;
    categoryId: string;   
}

export class Answer {
    id: number;
    questionId: number;
    user: User;
    answerText: string;
    date: Date;
    likes: Like[];    
    comments: Comment[];
}

export class AnswerViewModel {
    id: string;
    text: string;
    questionId: string;   
    likes: Like[];
    comments: Comment[];
    createdOn:Date;
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
    prefferedEmail: string;
    phoneNumber: string;
    addressLine1: string;
    addressLine2: string;
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
    startDate: number;
    endDate: number;
    timeFrameFrom: Date;
    timeFrameTo: Date;
    completedStudies: boolean;
    description: string;
    especiality: string;
}
export class Experience {
    userId: string;
    employer: string;
    positionHeld: string;
    location: string;
    startMonth: number;
    startYear: number;
    endMonth: number;
    endYear: number;
    timePeriodFrom: Date;
    timePeriodTo: Date;
    currentlyWorkingHere: boolean;
    description: string;
}
export class Skills {
    userId: string;
    skillArea: string[];
    skillName: string;
}
export class PracticeArea {
    userId: string;
    practiceArea: string[];
    PracticeAreaName: string;
}
export class Insight {
    userId: string;
    title: string;
    publication: string;
    dateMonth: number;
    dateYear: number;
    publicationDate: Date;
    publicationHyperlink: string;
    description: string;
    isHyperLink: boolean;
    isDocument: boolean;
    
}
//================..Profile Objects..
export class DateName {
     monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
}