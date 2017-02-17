export class CredentialViewModel {
    id: string
    userId: string
    firstName: string
    lastName: string
    title: string
    description: string
    imageUrl: string
    profileViewCount: string;
    educations: Education[];
    employments: Employment[]
    followers: Follower[]
    followings: Following[]
    places: Place[]
}
export class Employment {
    position: string;
    companyName: string;
    startDate: Date;
    endDate: Date;
    isCurrentlyWorking: boolean;
    credentialId: string;
}
export class Education {
    schoolName: string
    schoolDegreeName: string
    schoolCompletionDate: Date

    collegeName: string
    collegeDegree: string
    collegeCompletionDate: Date

    certification: string
    certificationType: string

    credentialId: string;
}
export class Follower {
    followerUserId: string
    fredentialId: string
}
export class Place {
    locationName: string;
    startYear: Date;
    endYear: Date;
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