import { UserInfoDetails } from './models/models.profile';

export class QuestionMenu {
    id: number;
    questiontext: string;
    questionDetails: string;
}

export class User {
    userId: string;
    name: string;
    occupassion: string;
    imageUrl: string;
    credentialId: string;
    userInfoDetails: UserInfoDetails;
}
export class LogInObj {
    user: User;
    isLoggedIn: boolean;
}
export class TotalCount {
    totalUsers: number;
    totalQuestions: number;
    totalAnsweredQuestion:number;
    totalUnAnsweredQuestion: number;
    totalFollowers:number;
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

export class CacheCategory {
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
    virtualStore: string;
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
    userViewModel: User;
    categories: Category[];
    questionTopics: Topic[];
    questionLevels:Level[];
    answers: AnswerViewModel[];
    bestAnswer: AnswerViewModel;
    shareUrl: string;
    viewCount: number;
    createdOn: Date;
    answerCount: number;
    topicId: string;
    levelId: string;
    isAnonymous: boolean;//IsAnonymous added
    isDirectQuestion:boolean;//Directquestion added 
    constructor() {
        this.userViewModel = new User();
        this.answers = new Array();
        this.comments = new Array();
        this.categoryIds = new Array();
        this.bestAnswer = new AnswerViewModel();
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
    id: string;
    questionId: string;
    user: User;
    text: string;
    date: Date;
    isDrafted: boolean; //IsDrafted added 
    IsAnonymous: boolean; //IsAnonymouss added 
    likes: Like[];
    firstImageUrl:string;
    comments: Comment[];
    answerTagsRemoved: string;
    answerLikeCount:number;
    constructor() {

        this.likes = new Array();
        this.comments = new Array();
    }
}

export class AnswerViewModel {
    id: string;
    text: string;
    questionId: string;
    likes: Like[];
    comments: Comment[];
    createdOn: Date;
    isAnonymous: boolean;//IsAnonymous added 
    isDrafted: boolean;
    userId: string;
    isFollowing: boolean;
    firstImageUrl: string;
    answerLikeCount: number;
    constructor() {

        this.likes = new Array();
        this.comments = new Array();
        this.isFollowing = false;
    }
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
    id: string;
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
    id: string;
    userId: string;
    tagLine: string;
    aboutMe: string;
}
export class Education {
    id: string;
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
    id: string;
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
    id: string;
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

//====Topic class

export class Topic {
    topicId:string;
    topicName: string;
    id: string;
    categoryId: string;
}

export class Level {
    levelName: string;
    id: string;
}

export class QuestionSaveViewModel {
    title: string;
    categoryIds: string[];
    topicId: string;
    levelId: string;
    body: string;
    isAnonymous: boolean;//IsAnonymous added 
    questionAskedToUser:string;
    constructor() {
      this.categoryIds = new Array();
    }

}

export class FilterParameter {
    categoryId: string;
    topicId: string;
    levelId: string;
}
//Question report added
export class QuestionReport {
    questionId: string;
    title: string;
    comment: string;
    answerId: string;
}

export class QuestionFollowing {
    followedUserId: string;
    questionId: string;
    answerId: string;
}

//export class UserInfoDetails {
//    userId: string;
//    answerCount: number;
//    questionCount: number;
//    education: string;
//    employment: string;
//    place: string;
//    otherExperience: string;
//    imageUrl: string;
//    fullName: string;
//    title: string;
//    questionViewCount: string;
//}