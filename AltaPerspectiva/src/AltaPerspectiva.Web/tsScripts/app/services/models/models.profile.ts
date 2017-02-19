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
    employments: Employment[];
    places: Place[];
    otherExperiences: OtherExperiences[];
}
export class Employment {
    position: string;
    companyName: string;
    startDate: number;
    endDate: number;
    isCurrentlyWorking: boolean;
    credentialId: string;
}
export class OtherExperiences {
    credentialId: string;
    categoryText: string;
    categoryId: string;
    description: string;
}

export class Education {

    schoolName: string;
    concentration: string;
    secondaryConcentration: string;
    degreeType: string;
    graduaionYear: number;
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
