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
    startDate: Date
    endDate: Date;
    isCurrentlyWorking: boolean;
    credentialId: string
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
    graduaionYear: string;
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
