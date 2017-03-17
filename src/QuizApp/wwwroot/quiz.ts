namespace QuizApp {
    class Question {
        question: string;
        answers: Array<string>;
        correctAnswer: number;
        
        createString():string {
            let choiceNum = 0
            let askQuestion = this.question
            for (let words of this.answers) {
                askQuestion += "\n" + ++choiceNum +". " + words;
            }
            return askQuestion;
            
        }

        grade(guessNum: number) {
            return guessNum == this.correctAnswer;
        }
    }

    class Quiz {
        questions: Question[];
        
        takeQuiz() {
            let numRight = 0;
            for (let i = 0; i < this.questions.length; i++) {
                let guess = prompt(this.questions[i].createString());
                if (this.questions[i].grade(this.questions[i].answers.indexOf(guess))) { numRight++;}               
            }
            
            alert(`You got ${numRight} out of ${this.questions.length} right`);
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

    alert("Welcome to the quiz! Please be sure to type the answers as they appear!");
    quiz1.takeQuiz();





}