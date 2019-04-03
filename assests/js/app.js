//better than document ready function event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
document.addEventListener("DOMContentLoaded", function() {
  console.log('loaded fine');
  quiz").hide();
  document.getElementsByClassName("nextButton").hide();

});

// global variables
let currentQuestion = 0;
let score = 0;
let questions = [
  {
    question: "Which country ranks number one in press freedom?",
    answers: {
        a: "Norway",
        b: "USA",
        c: "Switzerland",
        d: "England",
    },
    correctAnswer: "Norway",
  },

  {
      question: "In this year alone, what percentage of women journalists receive harassment for the stories they cover?",
      answers: {
          a: "2/3",
          b: "Internationally, we do not have the figures to back up these claims.",
          c: "1/3",
          d: "It happens more or less developed counties, we do not have the data to back up these claims.",
      },
      correctAnswer: "2/3",
  },

  {
      question: "To date, which country has the world’s worst ranking of press freedom?",
      answers: {
          a: "Mexico",
          b: "Russia",
          c: "South Sudan",
          d: "North Korea",
      },
      correctAnswer: "North Korea",
  },

  {
      question: "What is the ranking of the United States on the 2018 World Press Freedom Index?",
      answers: {
          a: "80",
          b: "1",
          c: "30",
          d: "40",
      },
      correctAnswer: "40",
  },

  {
      question: "What is Russia’s ranking on the 2018 World Press Freedom Index?",
      answers: {
          a: "148",
          b: "80",
          c: "100",
          d: "50",
      },
      correctAnswer: "148",
  },

  {
      question: "Cyberbullying and/or online bullying is not an infringement on journalists’ freedom.",
      answers: {
          a: "It is online, no real harm is done.",
          b: "No, journalists are just looking for attention, or to stir up tension for their newsfeed.",
          c: "The right to communicate online freely, without barriers, is a fundamental right to everyone: including the press.",
          d: "We all know trolling is a serious problem, but infringement is a too serious of a label to use.",
      },
      correctAnswer: "The right to communicate online freely, without barriers, is a fundamental right to everyone: including the press.",
  },

  {
      question: "Which is not an online attack method on journalists that authoritarian regimes in an attempt to silence journalists.",
      answers: {
          a: "Disinformation: journalistic content on social networks is drowned in a flood of fake new and pro-government content.",
          b: "Amplification: the impact of pro-government content is artificially enhanced by commentators who are paid by the government to post messages on social networks or by bots (computer programs that automatically generate posts).",
          c: "Intimidation: journalists are personally targeted, insulted and theatened, in order to discredit them and reduce them to silence.",
          d: "All of the above are forms of attacks on journalists.",
      },
      correctAnswer: "All of the above are forms of attacks on journalists.",
  },

  {
      question: "Press suppression is a third world and/or less developed country’s problem.",
      answers: {
          a: "True, this is largely a less developed country problem.",
          b: "False, it concerns countries from both developed and less developed democracies and governments.",
          c: "True, young governments do not have the resources to enforce press freedom.",
          d: "False, because of fake news and cyberbullying of journalist governments have imposed sanctions on media to stop unintended consequences.",
      },
      correctAnswer: "False, it concerns countries from both developed and less developed democracies and governments.",
  },

  {
      question: "This year alone, what percentage of women journalists were harassed offline?",
      answers: {
          a: "25%",
          b: "No data is available to acurrately discuss tnhis problem.",
          c: "75%",
          d: "30%",
      },
      correctAnswer: "25%",
  },

  {
      question: "Social media is the best approach for journalist and activists to reach their audience, without having to worry about censorship.",
      answers: {
          a: "Yes, social media by far is the best way for journalist and activists to reach their audience",
          b: "No, drawing too much publicity to their cause could be detrimental--thus they shy away from their use.",
          c: "Possibly, but what other choice do they have to spread their views.",
          d: "No, social media platforms often use imbalanced moderation policies via artificial intelligence that do not allow activists and journals to appeal of removal of their content",
      },
      correctAnswer: "No, social media platforms often use imbalanced moderation policies via artificial intelligence that do not allow activists and journals to appeal of removal of their content",
  },
];
//set the number counter to 30
let number = 30;
//holds the interval ID when we start the run function
let intervalId;

//code here for timer
let quizTimer = setInterval(myTimer, 1000);

function myTimer() {



}
//code here for if/else wrong answer

//functions for starting the game
document.getElementsByClassName("nextButton").onclick = function(event) {
  event.preventDefault();

};