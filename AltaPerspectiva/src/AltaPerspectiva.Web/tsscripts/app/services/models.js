var QuestionMenu = (function () {
    function QuestionMenu() {
    }
    return QuestionMenu;
}());
export { QuestionMenu };
var User = (function () {
    function User() {
    }
    return User;
}());
export { User };
var LogInObj = (function () {
    function LogInObj() {
    }
    return LogInObj;
}());
export { LogInObj };
var TotalCount = (function () {
    function TotalCount() {
    }
    return TotalCount;
}());
export { TotalCount };
var Category = (function () {
    function Category() {
    }
    return Category;
}());
export { Category };
var CacheCategory = (function () {
    function CacheCategory() {
    }
    Object.defineProperty(CacheCategory.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: true,
        configurable: true
    });
    return CacheCategory;
}());
export { CacheCategory };
var Comment = (function () {
    function Comment() {
    }
    return Comment;
}());
export { Comment };
var Config = (function () {
    function Config() {
    }
    return Config;
}());
export { Config };
var Like = (function () {
    function Like() {
    }
    return Like;
}());
export { Like };
var Question = (function () {
    function Question() {
        this.userViewModel = new User();
        this.answers = new Array();
        this.comments = new Array();
        this.categoryIds = new Array();
        this.bestAnswer = new AnswerViewModel();
        this.likes = new Array();
    }
    return Question;
}());
export { Question };
var AskQuestionViewModel = (function () {
    function AskQuestionViewModel(_title, _detials, _categoryId) {
        this.title = _title;
        this.body = _detials;
        this.categoryId = _categoryId;
    }
    return AskQuestionViewModel;
}());
export { AskQuestionViewModel };
var Keyword = (function () {
    function Keyword() {
    }
    return Keyword;
}());
export { Keyword };
var Answer = (function () {
    function Answer() {
        this.likes = new Array();
        this.comments = new Array();
    }
    return Answer;
}());
export { Answer };
var AnswerViewModel = (function () {
    function AnswerViewModel() {
        this.likes = new Array();
        this.comments = new Array();
        this.isFollowing = false;
    }
    return AnswerViewModel;
}());
export { AnswerViewModel };
var Profile = (function () {
    function Profile() {
    }
    return Profile;
}());
export { Profile };
var Contact = (function () {
    function Contact() {
    }
    return Contact;
}());
export { Contact };
var Biography = (function () {
    function Biography() {
    }
    return Biography;
}());
export { Biography };
var Education = (function () {
    function Education() {
    }
    return Education;
}());
export { Education };
var Experience = (function () {
    function Experience() {
    }
    return Experience;
}());
export { Experience };
var Skills = (function () {
    function Skills() {
    }
    return Skills;
}());
export { Skills };
var PracticeArea = (function () {
    function PracticeArea() {
    }
    return PracticeArea;
}());
export { PracticeArea };
var Insight = (function () {
    function Insight() {
    }
    return Insight;
}());
export { Insight };
var DateName = (function () {
    function DateName() {
        this.monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
    }
    return DateName;
}());
export { DateName };
var Topic = (function () {
    function Topic() {
    }
    return Topic;
}());
export { Topic };
var Level = (function () {
    function Level() {
    }
    return Level;
}());
export { Level };
var QuestionSaveViewModel = (function () {
    function QuestionSaveViewModel() {
        this.categoryIds = new Array();
    }
    return QuestionSaveViewModel;
}());
export { QuestionSaveViewModel };
var FilterParameter = (function () {
    function FilterParameter() {
    }
    return FilterParameter;
}());
export { FilterParameter };
var QuestionReport = (function () {
    function QuestionReport() {
    }
    return QuestionReport;
}());
export { QuestionReport };
var QuestionFollowing = (function () {
    function QuestionFollowing() {
    }
    return QuestionFollowing;
}());
export { QuestionFollowing };
