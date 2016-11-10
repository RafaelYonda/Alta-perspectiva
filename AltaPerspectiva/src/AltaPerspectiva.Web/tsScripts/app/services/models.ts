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
export class Answer {
    id: number;
    questionId: number;
    user: User;
    answerText: string;
    date: Date;
    topics: string;
}
export class DateName {
    getMonthName(month: number):string {
       var  monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
       return monthNames[month];
    }
}