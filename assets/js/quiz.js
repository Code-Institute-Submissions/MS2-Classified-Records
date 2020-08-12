//all code and functions for the quiz to be scoped inside this "quiz" function
const quiz = () => {
    //storing HTML quiz element references in variables
    const quizContainer = $("#quiz");
    const resultsContainer = $("#results");
    const submitButton = $("#submit");

    const questions = [
        {
            question: "Who is Radiohead's drummer?",
            answers: {
                a: "Ed O'Brien",
                b: "Colin Greenwood",
                c: "Phil Selway",
            },
            correctAnswer: "c",
        },
        {
            question:
                "In what year did Skream release his seminal dubstep masterpiece 'Skream'?",
            answers: {
                a: "2002",
                b: "2004",
                c: "2006",
            },
            correctAnswer: "c",
        },
        {
            question:
                "Who played guitar and bass on Labi Siffre's oft-sampled classic 'I Got The...'?",
            answers: {
                a: "Chas and Dave",
                b: "Ronnie Wood and Bill Wyman",
                c: "Mick Ronson and Jack Bruce",
            },
            correctAnswer: "a",
        },
    ];

    const buildQuiz = () => {
        //variable to store HTML output
        const output = [];

        questions.forEach((currentQuestion, questionNumber) => {
            //var to store each possible answer
            const answers = [];

            for (letter in currentQuestion.answers) {
                //add a radio button
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber} value="${letter}>
                    ${letter} :
                    ${currentQuestion.answers[letter]} 
                </label>`
                );
            }

            //add this question and it's answers to output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join("")} </div>`
            );
        });

        //combine output list into one HTML string and put it on the page
        quizContainer.innerHTML = output.join("");
    };

    const showResults = () => {};

    //call inner function to run within "parent" quiz() function
    buildQuiz();
    //run show results function when submit button clicked
    submitButton.click(showResults);
};

//calling quiz function to run the quiz
quiz();
