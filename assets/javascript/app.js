

// $("#start").on("click", function(){
//     //function that displays Q's + timer and starts timer 
//     var timer = setTimeout(function(){
//     }, 60000);

//     setInterval(function() {
//         number--, 1000
//     });
//     clearInterval(intervalID);
//     // $(".questions").html("<p>" + questions + "</p>");


// });

// var number = 60;
// var intervalID;
// var questions = ["What year was Back to the Future released?", 
// "In what city did Ferris Bueller take his day off?"];

// $("#timer").html("<p>Time Remaining: " + number + "</p>");

// setInterval(function () {
//     alert("Time's Up!")
// }, 60000);


// function run() {
//     clearInterval(intervalId);
//     intervalId = setInterval(decrement, 1000);
// };

// function decrement() {
//     var number = 60;
//     number--;
//     clearInterval(intervalID);
//     $("#timer").html("<p>Time Remaining: " + number + "</p>");


//     if (number === 0) {
//         stop();
//         alert("Time's up!");
//     }

// };

// function stop() {
//     clearInterval(intervalID);
// }


// run();

//pseudocode

//user opens page, title shows and START BUTTON is there
//user CLICKS start
//after clicking start TIMER and QUESTIONS DISPLAY on screen
//timers runs in the bground and is shown on screen
//

var number = 60;

$(document).ready(function () {

    $(".questions").hide();
    $(".timer").hide();

    $("#start").on("click", function () {
        setTimeout(function(){
            decrement, 1000
        })
        $("#timer").html(number); 
        $(".questions").show();
        $(".timer").show();

    })





});