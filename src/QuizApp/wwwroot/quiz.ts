namespace QuizApp {
    class Question {
        question: string;
        answers: Array<string>;
        correctAnswer: number;

        createString() {
            let askQuestion = this.question
            for (let words of this.answers)
                askQuestion += "\n" + words;
            prompt(askQuestion);
        }

        grade(guessNum: number) {
            return guessNum == this.correctAnswer;
        }
    }

    class Quiz {
        questions: Question[];
        answers: Array<string>;

        takeQuiz() {
            for (let i = 0; i < this.questions.length; i++) {
                this.questions[i].createString()
            };

        }

        grade(guesses: number[]) {
            let numCorrect = 0;
            for (let i = 0; i < this.questions.length; i++) {
                if (this.questions[i].grade(guesses[i])) {
                    numCorrect++;
                }
            }
            return numCorrect;
        }

    }

    let question1 = new Question();
    question1.question = "What is the freezing point of water?";
    question1.answers = ["48F", "219F", "32F"];
    question1.correctAnswer = 2;

    let question2 = new Question();
    question2.question = "What is the speed of sound at sea level on a typical day?";
    question2.answers = ["400012 m/s", "340m/s", "1031m/s"];
    question2.correctAnswer = 1;

    let question3 = new Question();
    question3.question = "Vodka, Galliano and orange juice are used to make which classic cocktail?";
    question3.answers = ["Screwdriver", "Manhattan", "Harvey Wallbanger"]
    question3.correctAnswer = 2;

    let question4 = new Question();
    question4.question = "Alan Minter was undisputed World boxing champion at which weight?";
    question4.answers = ["Middleweight", "Welterweight", "Heavyweight"];
    question4.correctAnswer = 0;

    let question5 = new Question();
    question5.question = "What is the colour of the bull of an archery target?";
    question5.answers = ["red", "gold", "black"];
    question5.correctAnswer = 1;

    let quiz1 = new Quiz()
    quiz1.questions = [question1, question2, question3, question4, question5];
    quiz1.takeQuiz();





}