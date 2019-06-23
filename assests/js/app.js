//better than document ready function event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
document.addEventListener("DOMContentLoaded", function() {
  console.log('loaded fine');
  startQuiz();
  comparingAnswers();
  document.getElementsByClassName("finishedQuiz").hide();
  document.getElementsByClassName("quizWrapper").hide();
});

// global variables
var currentQuestion = 0;
var score = 0;

function comparingAnswers() {
    document.getElementsByClassName("nextButton").on("click", function (event) {
                event.preventDefault();
                const choiceLetter = document.querySelector(`input[name='quizchoices']:checked`).val();
                const wrongAnswerText = `I'm sorry, that was the incorrect answer. The correct answer is: ${questions[currentQuestion].correctAnswer}`;
                const rightAnswerText = "Good job! Right answer.";
        } if { 
            //if they have made a choice then the trivia goes on
            //if the user gets to the last question be able to stop the quiz
            if ((currentQuestion + 1) === questions.length) {
                document.getElementsByClassName("finishedQuiz").show();
                document.getElementsByClassName("wrapper").hide();
                document.getElementsByClassName("quiz").hide();
                calculatePercentage("You're final score is: "); //informs the user of their final score
                resetQuiz();
                exitQuiz();
                //clearInterval(timeTotal);
            } else { //if else statement for the user to continue the quiz until the reach the last question
                if (choiceLetter === questions[currentQuestion].correctAnswer) {
                    document.getElementsByClassName("rightFeebackPart").text(rightAnswerText).show(); //generate next question if the user gets the question right
                    document.getElementsByClassName("wrongFeebackPart").hide();
                    score++; //increase the users' score if the get the question right
                    currentQuestion++; //show the next question if the user gets the previous question correct
                    //clearInterval(timeTotal);

                } else {
                    document.getElementsByClassName("wrongFeebackPart").show().text(wrongAnswerText); //informs the user that they selected the wrong answer and shows the correct answer instead
                    document.getElementsByClassName("rightFeebackPart").hide();
                    currentQuestion++; //moves on to the next question
                    //clearInterval(timeTotal);
                    //skipTime();
                }
                calculatePercentage("You're current score is: "); //informs the user of their current score
                document.getElementsByClassName("quizLocation").html(`You're on question: ${currentQuestion}`); //informs the user of their location in the quiz
                generateQuestions();
            }
        } 
    }
});



function generateQuestions() { //generate questions
  document.getElementsByClassName("quizQuestions").html(`
    <legend>
      ${questions[currentQuestion].question}
    </legend>

    <div>
      <input id="${questions[currentQuestion].answers.a}" type="radio" name="quizchoices" value="${questions[currentQuestion].answers.a}" checked>
      <label for="${questions[currentQuestion].answers.a}"> ${questions[currentQuestion].answers.a}</label>
    </div>

    <div>
      <input id="${questions[currentQuestion].answers.b}" type="radio" name="quizchoices" value="${questions[currentQuestion].answers.b}">
      <label for="${questions[currentQuestion].answers.b}"> ${questions[currentQuestion].answers.b}</label>
    </div>

    <div>
      <input id="${questions[currentQuestion].answers.c}" type="radio" name="quizchoices" value="${questions[currentQuestion].answers.c}">
      <label for="${questions[currentQuestion].answers.c}"> ${questions[currentQuestion].answers.c}</label>
    </div>

    <div>
      <input id="${questions[currentQuestion].answers.d}" type="radio" name="quizchoices" value="${questions[currentQuestion].answers.d}">
      <label for="${questions[currentQuestion].answers.d}"> ${questions[currentQuestion].answers.d}</label>
    </div>
  `);
}

function resetQuiz() {
    document.getElementsByClassName("resetButton").on("click", function (event) {
        // event.preventDefault();
        // score = 0; //resets the score to 0
        // currentQuestion = 0; //restart the quiz question to 1
        // startQuiz();
        // $(".quizWrapper").show();
        // $(".feedbackPartSelection").hide();
        // $(".quizLocation").html(`You are on question: ${currentQuestion + 1}`).show();
        // //$(".finishedQuiz").show();
        // $(".introWrapper").show();
        event.preventDefault();
        console.log("start is working");
        //timeTotal = 20;

        //$(".timer").text(timeTotal)
        //timer = setInterval(count, 1000);
        document.getElementsByClassName("quizWrapper").show();
        document.getElementsByClassName("feedbackPartSelection").show();
        document.getElementsByClassName("quizLocation").html(`You are on question: ${currentQuestion +1}`).show();
        document.getElementsByClassName("finishedQuiz").hide();
        document.getElementsByClassName("introWrapper").hide();
    });
    // comparingAnswers();
    generateQuestions();
}

function exitQuiz() { //exits the quiz on click
    document.getElementsByClassName("exitButton").on("click", function (event) {
        event.preventDefault();
        window.location.href = "https://github.com/allisonsnipes";
    });
}

function calculatePercentage(percentageText) { //calculates the user's score
    const percentage = ((score / 10) * 100);
    document.getElementsByClassName("percentPart").text(`${percentageText} ${percentage} %`);
}

//i tried to make a timer but it kept breaking the whole project still working with tutor to get it working
//  var timer set up should be 20 seconds that should restart with each question selection

// //skip question when time is up
// function skipTime() {
//     setTimeout(function () {
//         if ((currentQuestion + 1) < questions.length) {
//             currentQuestion++;
//         } else {
//             $(".quizWrapper").hide();
//             calculatePercentage();
//             $(".finishedQuiz").show();
//         }
//     }, 4000); 
// }
