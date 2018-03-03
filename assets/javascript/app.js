$(document).ready(function(){

    var countTime;
    var countQ = 0;
    var timer;
    var clickedId;
    var wrongAnswers = 0;
    var rightAnswers = 0;
    var noAnswers = 0;

    var trivia = {
        questions: [
            "Which artist was a student of Josef Albers (who belonged to the Bauhaus movement) and stated that Albers influenced him to do the absolute opposite of what he was being taught?",
            "Who painted Luncheon on the Grass"
        ],
        answers: [{
            correctAnswer: "Robert Rauschenberg",
            wrongAnswer1: "Willem De Kooning",
            wrongAnswer2: "Cy Twombly",
            wrongAnswer3: "Mark Rothko"
        }, {
            correctAnswer: "Manet",
            wrongAnswer1: "Vermeer",
            wrongAnswer2: "Cassat",
            wrongAnswer3: "Whistler"
        }],
        images: [
            "image1.jpg",
            "test.png"
        ]
      };

    var preClick = function() {
        $("#time-remaining").hide();
        $("ul").hide();
    }

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
            displayOut();
            noAnswers++;
            countQ++;
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

    //create function to display the answers in a random order
    // var randomizeAnswers = function(){

    // }

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

    //handles on.click event for answers
    var handleAnswerClick = function(){
        $("ul").on("click", "li", function() {
            clickedId = $(this).text();
            checkAnswer();
        });
    }

    //handles loss after timer runs out
    var handleLoss = function(){
        wrongAnswers++;
        clearInterval(timer);
        displayWrong();
        countQ++
    }

    //handles loss after timer runs out
    var handleWin = function(){
        rightAnswers++;
        clearInterval(timer)
        displayRight();
        countQ++;
    }

    //create conditional to check for right answer / answer will always be array[i].correctAnswer
    var checkAnswer = function(){
        if (clickedId == trivia.answers[countQ].correctAnswer){
            handleWin();
        }
        else {
            handleLoss();
        }
    }

    var basicDisplayChange = function() {
        changeImage();
        $("ul").hide();
        $("ul").empty();
        setTimeout(function(){
            gameInPlay();
        }, 3000);
    }

    //create function to display timer
    var displayWrong = function(){
        basicDisplayChange();
        $('#questions').text("You're wrong! The answer was " + trivia.answers[countQ].correctAnswer);
    }

    //create function to DISPLAY correct answer for a set amount of time
    var displayOut = function(){
        basicDisplayChange();
        $('#questions').text("You're out of time! The answer was " + trivia.answers[countQ].correctAnswer);
    }    

    //create function to DISPLAY correct answer for a set amount of time
    var displayRight = function(){
        basicDisplayChange();
        $('#questions').text("You're Right! The answer was " + trivia.answers[countQ].correctAnswer);
    }

    var displayResults = function(){
        $("#questions").text("Great Job! Here's how you did:");
        $("button").text("Start Over?");
        $("button").show();
        $("ul").show();
        $('#answers').append('<ol>' + 'Right Answers: ' + rightAnswers + '</ol>').append('<ol>' + 'Wrong Answers: ' + wrongAnswers + '</ol>').append('<ol>' + 'Unanswered: ' + noAnswers + '<ol>');
    }

    //create function to change background image to match right answer
    var changeImage = function(){
        //get image name from array and change the css background image attribute
        $("body").css("background-image", "url('assets/images/" + trivia.images[countQ] + "')");
    }

    //create init game function
    var startGame = function(){
        countQ = 0;
        countTime = 30;
        wrongAnswers = 0;
        rightAnswers = 0;
        noAnswers = 0;
        $("body").css("background-image", "url('assets/images/background.jpg')");
        $("ul").empty();
        $("ul").show();
        counter();
        displayQuestion(countQ);
        displayAnswer(countQ);
        
    }

    var gameInPlay = function() {
        if (countQ < trivia.questions.length){
            countTime = 30;
            $("ul").show();
            counter();
            displayQuestion(countQ);
            displayAnswer(countQ);
        }
        else {
            displayResults();
        }
    }

    preClick();
    handleFirstClick();
    handleAnswerClick();
});
