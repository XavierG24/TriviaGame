//pseudocode
//user opens page, title shows and START BUTTON is there
//user CLICKS start
//after clicking start TIMER and QUESTIONS DISPLAY on screen
//timers runs in the bground and is shown on screen
//

var number = 60;
var intervalID;
var correctAnswer;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;


$(".questions").hide();
$(".timer").hide();
$("#results").hide();

//when start is clicked, questions appear, timer appears and is counting down...
$(document).ready(function () {

    $("#start").on("click", function () {

        $(".questions").show();
        $(".timer").show();

    });

    function run() {
        intervalId = setInterval(decrement, 1000);
    };


    function decrement() {
        $(".timer").html("<h2>Time Remaining: " + number + "</h2>");
        number--;


        if (number === -1) {
            stop();
            $(".questions").hide();
            $("#results").show();
        };


    };

   $(".correct").on("click", function () {
        correctAnswers++;
        console.log(correctAnswers);
        //display score
        $("#right-answers").text(correctAnswers);
    });

    //check if guess was right
    //if guessed right show on screen
    // else increment incorrect guesses by 1

    

    function stop() {
        clearInterval(intervalId);
       
    };

    run();
});
