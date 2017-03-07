import { User } from '../models';

export class CredentialViewModel {
    id: string
    userId: string
    firstName: string
    lastName: string
    title: string
    description: string
    imageUrl: string
    profileViewCount: string;
    twitterLink:string;
    facebookLink:string;
    linkedinLink:string;
    educations: Education[];
    employments: Employment[];
    places: Place[];
    otherExperiences: OtherExperience[];
}
export class Employment {
    position: string;
    companyName: string;
    startDate: number;
    endDate: number;
    isCurrentlyWorking: boolean;
    credentialId: string;
}
//export class OtherExperiences {
//    credentialId: string;
//    categoryText: string;
//    categoryId: string;
//    description: string;
//}
export class OtherExperience {
    categoryId: string;
    description: string;
    credentialId: string;

}

export class Education {
    schoolName: string;
    concentration: string;
    secondaryConcentration: string;
    degreeType: string;
    graduationYear: number;
    credentialId: string;
}
export class Follower {
    followerUserId: string
    fredentialId: string
}
export class Place {
    locationName: string;
    startYear: number;
    endYear: number;
    isCurrentyLiving: boolean;
    credentialId: string;
}

export class Following {
    followingUserId: string
    credentialId: string
}
export class UserInfoDetails {
    userId: string;
    answerCount: number;
    questionCount: number;
    education: string;
    employment: string;
    place: string;
    otherExperience: string;
    imageUrl: string;
    fullName: string;
    title: string;
    questionViewCount: string;
}
export class ProfileParameter {
    followings: number;
    followers: number;
    bookmarks: number;
    answers: number;
    questions: number;
    directQuestions: number;
    blogs: number;

    //others
    profileViewCount: number;
    answerLikeCount: number;
    answerMadeThisMonth: number;
    questionMadeThisMonth: number;
}
export class CategoryWiseAnswer {
    categoryName: string;
    answerCount: number;
    imageUrl: string;
}
export class VirtualStore {
    id: string;
    price: number;
    title: string;
    description: string;
    productFileName: string;
    screenShotFileName: string;
    productComments: ProductComment[];
    
}
export class ProductComment {
    commentText:string;
    userId:string;
    virtualStoreId: string;
    userViewModel: User;
}
