var QuizApp;
(function (QuizApp) {
    var Question = (function () {
        function Question() {
        }
        Question.prototype.createString = function () {
            var askQuestion = this.question;
            for (var _i = 0, _a = this.answers; _i < _a.length; _i++) {
                var words = _a[_i];
                askQuestion += "\n" + words;
            }
            prompt(askQuestion);
        };
        Question.prototype.grade = function (guessNum) {
            return guessNum == this.correctAnswer;
        };
        return Question;
    }());
    var Quiz = (function () {
        function Quiz() {
        }
        Quiz.prototype.takeQuiz = function () {
            for (var i = 0; i < this.questions.length; i++) {
                this.questions[i].createString();
            }
            ;
        };
        Quiz.prototype.grade = function (guesses) {
            var numCorrect = 0;
            for (var i = 0; i < this.questions.length; i++) {
                if (this.questions[i].grade(guesses[i])) {
                    numCorrect++;
                }
            }
            return numCorrect;
        };
        return Quiz;
    }());
    var question1 = new Question();
    question1.question = "What is the freezing point of water?";
    question1.answers = ["48F", "219F", "32F"];
    question1.correctAnswer = 2;
    var question2 = new Question();
    question2.question = "What is the speed of sound at sea level on a typical day?";
    question2.answers = ["400012 m/s", "340m/s", "1031m/s"];
    question2.correctAnswer = 1;
    var question3 = new Question();
    question3.question = "Vodka, Galliano and orange juice are used to make which classic cocktail?";
    question3.answers = ["Screwdriver", "Manhattan", "Harvey Wallbanger"];
    question3.correctAnswer = 2;
    var question4 = new Question();
    question4.question = "Alan Minter was undisputed World boxing champion at which weight?";
    question4.answers = ["Middleweight", "Welterweight", "Heavyweight"];
    question4.correctAnswer = 0;
    var question5 = new Question();
    question5.question = "What is the colour of the bull of an archery target?";
    question5.answers = ["red", "gold", "black"];
    question5.correctAnswer = 1;
    var quiz1 = new Quiz();
    quiz1.questions = [question1, question2, question3, question4, question5];
    quiz1.takeQuiz();
})(QuizApp || (QuizApp = {}));
//# sourceMappingURL=quiz.js.map