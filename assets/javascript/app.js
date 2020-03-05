

$(document).ready(function () {

    $("#Timer").hide()
    $("#quizArea").hide()

    var correctCount = 0
    var incorrectCount = 0
    var unansweredCount = 0
    var currentQuestion = 0
    var clockTime = 30
    var timeInterval

var questions = [
    {
        question: "What century was the term Serial Killer coined?",
        choices: ["1960", "1970", "1980", "1990"],
        answer: "1970"
    },
    {
        question: "Who is the most notorious Serial Killer?",
        choices: ["Jack the Ripper", "Ted Bundy", "John Wayne Gacy", "Jeffrey Dahmer"],
        answer: "Ted Bundy"
    },
    {
        question: "How many Serial Killer have there been in the US in the last century?",
        choices: ["100", "200", "300", "400"],
        answer: "400"
    },
    {
        question: "Patterns that link separate homicides are called?",
        choices: ["Tracks", "Blueprints", "Signatures", "MOs"],
        answer: "Signatures"
    },
    {
        question: "What is a Serial Killers MO?",
        choices: ["Method of Operation", "Murder Operation", "Modus Operandi", "More Operations"],
        answer: "2"
    },
    {
        question: "Which state has the most Serial Killers?",
        choices: ["Texas", "California", "Nebraska", "California"],
        answer: "California"
    }
]


function startGame(){
$("#Timer").show()
$("#quizArea").show()
countdown()
nextQuestion()
}

function nextQuestion(){
timeInterval = setInterval(countdown, 1000);//run after every second
console.log(questions[currentQuestion].question)
$("#quizArea").empty()
$("#quizArea").append("<h3 class='.text-white'>"+ questions[currentQuestion].question+"</h3>");
//incrementing next question
currentQuestion++;
}


function countdown(){
    clockTime--;
    $("#Timer").text("Timer: " + clockTime);
    if (clockTime === 0) {
            
        //Displays Scoreboard only  after the last question is displayed 
        if( currentQuestion > questions.length -1  ){
            quizResults();
        }
        else {
            //Move to next Question 
            nextQuestion(); 
        }
    }
else {
    //IN CASE LAST QUESTION DISPLAY SCORE BOARD 
    if ((currentQuestion > questions.length -1)){
        quizResults();
    }
}
}


$("#startGame").click(function()
{
    console.log("start game click")
startGame()
})

//Unable to get this to run properly - didn't give myself enough time to figure it out
//Wasn't able to figure out the function to do correct and incorrect answer or show the results
//Timer isn't functioning properly, it doesn't stop at 0, it goes into the negatives
//I have tried a few different things and had my tutor look at it and she was able to help with the functions but didn't have enough time to complete it
//I started if/else but it doesn't work
//Need to go back and commit more time to this

});
