
function buildQuiz() {
    //variable to store HTML output
    const output = [];

    questions.forEach((currentQuestion, questionNumber) => {
        //var to store each possible answer
        const answers = [];

        for (letter in currentQuestion.answers) {
            //add a radio button
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber} value="${letter}">
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
}

function showResults() {
    //get answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    //keep track of user's answers
    let numCorrect = 0;

    questions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {})
            .value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = "affc61";
        }
        // if answer is wrong or blank
        else {
            // color the answers red
            answerContainers[questionNumber].style.color = "#fc6161";
        }
    });

    //show results
    resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
}

//storing HTML quiz element references in variables
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

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

//call function to display quiz immediately
buildQuiz();

//run show results function when submit button clicked
submitButton.addEventListener("click", showResults);
