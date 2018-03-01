$(document).ready(function(){

    var countTime = 29, countQ = 0, timer, clickedId;

    var answerText = $("li").html();

    $("#time-remaining").hide();
    //create array of objects for tivia questions
    // var trivia = [
    //     {"question":"Who painted The Girl With the Pearl Earring","correctAnswer":"Vermeer","wrongAnswer1":"Manet","wrongAnswer2":"Whistler","wrongAnswer3":"Cassat"},
    //     {"question":"Who painted Luncheon on the Grass","correctAnswer":"Manet","wrongAnswer1":"Vermeer","wrongAnswer2":"Whistler","wrongAnswer3":"Cassat"}
    // ];

    var trivia = {
        questions: [
            "Who painted The Girl With the Pearl Earring",
            "Who painted Luncheon on the Grass"
        ],
        answers: [{
          correctAnswer: "Vermeer",
          wrongAnswer1: "Manet",
          wrongAnswer2: "Whistler",
          wrongAnswer3: "Cassat"
        }, {
            correctAnswer: "Manet",
            wrongAnswer1: "Vermeer",
            wrongAnswer2: "Whistler",
            wrongAnswer3: "Cassat"
        }]
      };

    // //create init game function
    // var startGame = function(){
    //     counter();
    //     displayQuestion(countQ);
    // }

    var displayTime = function(){
        $('#time-remaining').text("Time Remaining: " + countTime + " seconds");
    }

    //create timer function
    var handleTimer = function(){
        displayTime();
        countTime = countTime - 1;
        if (countTime === -1){
            clearInterval(timer);
            //counter ended, do something here
            //displayRight in set Interval
            //countQ++
            return;
        }
    }

    var counter = function(){
        timer = setInterval(handleTimer,1000);
    }
    

    //create function to loop through all objects(questions) in array and display them display with answers at random
    var displayQuestion = function(index){
        $('#questions').text(trivia.questions[index]);
    }

    //create function to loop through all objects(answers) in array and display them display as UL at random
    var displayAnswer = function(){
        $('#answers').append('<li>' + trivia.answers[countQ].correctAnswer + '</li>').append('<li>' + trivia.answers[countQ].wrongAnswer1 + '</li>').append('<li>' + trivia.answers[countQ].wrongAnswer2 + '</li>').append('<li>' + trivia.answers[countQ].wrongAnswer3 + '</li>');
    }


    var randomizeAnswers = function(){

    }
    //create init game function
    var startGame = function(){
        counter();
        displayQuestion(countQ);
        displayAnswer(countQ);
    }

    //create function to handle click
    var handleFirstClick = function(){
        $("button").on("click", function() {
        
            //When button is pressed, show game play container
            $("button").hide();
            $("#time-remaining").show();
    
            // Call startGame so we can set the state of our app
            startGame();
    
        });
    }

    handleFirstClick();
    

    //handles on.click event for answers
    var handleAnswerClick = function(){
        $("ul").on("click", "li", function() {
            clickedId = $(this).text();
            checkAnswer();
        });
    }

    handleAnswerClick();

    //handles loss after timer runs out
    var handleLoss = function(){

    }

    //create conditional to check for right answer / answer will always be array[i].correctAnswer
    var checkAnswer = function(){
        if (clickedId === trivia.answers[countQ].correctAnswer){
            console.log(trivia.answers[countQ].correctAnswer);
            console.log("right answer!");
            //
        }
        else {
            console.log("wrong answer!");
        }
    }

    //create function to display timer
    var display = function(){
        countQ

        displayAnswer
    }

    //create functions for when timer ends, display new questions
    // var handleTimer = function(){

    // }

    //create function to change image
    var changeImage = function(){

    }

    //create function to DISPLAY correct answer for a set amount of time
    var displayRight = function(){

    }

    
});

//button to start the game, when clicked displays 1st question

//

