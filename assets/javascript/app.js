$(document).ready(function(){

    var count = 31;

    //create array of objects for tivia questions
    var trivia = [
        {"question":"Who painted The Girl With the Pearl Earring","correctAnswer":"Vermeer","wrongAnswer1":"Manet","wrongAnswer2":"Whistler","wrongAnswer3":"Cassat"},
        {"question":"Who painted Luncheon on the Grass","correctAnswer":"Manet","wrongAnswer1":"Vermeer","wrongAnswer2":"Whistler","wrongAnswer3":"Cassat"}
    ];

    //create init game function
    var startGame = function(){
        var counter = setInterval(function(){
            count = count - 1;
            if (count <= 0){
                clearInterval(counter);
                //counter ended, do something here
                return;
            }
            $('#time-remaining').text("Time Remaining: " + count + " seconds");
        }, 1000); //1000 will  run it every 1 second
    }

    //create timer function
    // count = 31;

    // var counter = setInterval(function(){
    //     count = count - 1;
    //     if (count <= 0){
    //         clearInterval(counter);
    //         //counter ended, do something here
    //         return;
    //     }
    //     $('#time-remaining').text("Time Remaining: " + count + " seconds");
    // }, 1000); //1000 will  run it every 1 second

    
    //create function to loop through all objects(questions) in array and display them display with answers at random
    var displayQuestion = function(){
        for (i = 0; i < trivia.length; i++){
            $('#questions').text(trivia[i].question);
        }
    }

    //create function to loop through all objects(answers) in array and display them display as UL at random
    var displayAnswer = function(){
        for (i = 0; i < trivia.length; i++){
            $('#answers').append('<li>' + trivia[i].correctAnswer + '</li>').append('<li>' + trivia[i].wrongAnswer1 + '</li>').append('<li>' + trivia[i].wrongAnswer2 + '</li>').append('<li>' + trivia[i].wrongAnswer3 + '</li>');
        }
    }

    var randomizeAnswers = function(){

    }

    //create function to handle click
    var handleFirstClick = function(){
        $("button").on("click", function() {
        
            //When button is pressed, show game play container
            $("button").hide();
    
            // Call startGame so we can set the state of our app
            startGame();
    
        });
    }

    handleFirstClick();

    //handles on.click event for answers
    var handleAnswerClick = function(){

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