$(document).ready(function(){

    //create array of objects for tivia questions
    var trivia = [
        {"question":"Who painted The Girl With the Pearl Earring","correctAnswer":"Vermeer","wrongAnswer1":"Manet","wrongAnswer2":"Whistler","wrongAnswer3":"Cassat"},
        {"question":"Who painted Luncheon on the Grass","correctAnswer":"Manet","wrongAnswer1":"Vermeer","wrongAnswer2":"Whistler","wrongAnswer3":"Cassat"}
    ];

    //create init game function
    var initializeGame = function(){

    }

    //create timer function
    var count=30;

    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

    var qTimer = function(){
        count=count-1;
        if (count <= 0){
            clearInterval(counter);
            //counter ended, do something here
            return;
        }
        //Do code for showing the number of seconds here
    }


    //create function to loop through all objects(questions) in array and display them display with answers at random
    var displayQuestion = function(){
        for (i = 0; i < trivia.length; i++){
            $('#questions').append(trivia[i].question);
        }
    }

    //create function to loop through all objects(answers) in array and display them display as UL at random
    var displayAnswer = function(){
        for (i = 0; i < trivia.length; i++){
            console.log(trivia[i].correctAnswer);
        }
    }

    displayAnswer();

    var randomizeAnswers = function(){
        for (i = 0; i < trivia.length; i++){
            var random = Math.floor(Math.random(trivia[i]);
        }
    }

    //create function to handle click
    var handleClick = function(){

    }

    //create conditional to check for right answer / answer will always be array[i].correctAnswer
    var checkAnswer = function(){

    }

    //create function to display timer
    var displayTimer = function(){

    }

    //create functions for when timer ends, display new questions
    var handleTimer = function(){

    }

    //create function to change image
    var changeImage = function(){

    }

    //create function to DISPLAY correct answer for a set amount of time
    var displayAfterTimer = function(){

    }

    
});