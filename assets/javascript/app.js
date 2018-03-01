$(document).ready(function(){

    var countTime = 29;
    var countQ = 0;
    var timer;
    var clickedId;
    var wrongAnswers = 0;
    var rightAnswers = 0;
    var noAnswers = 0;

    var answerText = $("li").html();

    $("#time-remaining").hide();
    $("ul").hide();
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
            wrongAnswer2: "Cassat",
            wrongAnswer3: "Whistler"
        }]
        //images: 
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
            //displayOut in set Interval
            //noAnswers++;
            //countQ++
            //console.log("out of time!");
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
        
        // // $.each(trivia.answers, function (i) {
        //     $.each(trivia.answers[countQ], function (key, value) {
        //         console.log(value);
        //         // $('li').each(function (key, value) { 
        //         //     $(this).text(value); 
        //         // });
        //         // //console.log(value);
        //         // var newAnswer = value;
        //         // $('li').text(newAnswer);
        //         $("li").prepend(value);
        //     });
        // // });
    }

    //create function to display the answers in a random order
    var randomizeAnswers = function(){

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
        if (clickedId === trivia.answers[countQ].correctAnswer){
            console.log(trivia.answers[countQ].correctAnswer);
            console.log("right answer!");
            handleWin();
        }
        else {
            console.log("wrong answer!");
            handleLoss();
        }
    }

    //create function to display timer
    var displayWrong = function(){
        //changeImage();
        $("ul").hide();
        $('#questions').text("You're wrong! The answer was " + trivia.answers[countQ].correctAnswer);
        setTimeout(function(){
            gameInPlay();
        }, 2000);
    }

    //create function to DISPLAY correct answer for a set amount of time
    var displayOut = function(){
        //changeImage();
        $("ul").hide();
        $('#questions').text("You're out of time! The answer was " + trivia.answers[countQ].correctAnswer);
        setTimeout(function(){
            gameInPlay();
        }, 2000)
    }    

    //create function to DISPLAY correct answer for a set amount of time
    var displayRight = function(){
        //changeImage();
        $("ul").hide();
        $("ul").empty();
        $('#questions').text("You're Right! The answer was " + trivia.answers[countQ].correctAnswer);
        setTimeout(function(){
            gameInPlay();
        }, 2000);
    }

    var displayResults = function(){
        //display rightAnswers;
        $("body").hide();
        console.log(rightAnswers);
        console.log(wrongAnswers);
        //display wrongAnswers;
        //display noAnswers;
        //set timeout, 
        //then reset function
    }

    //create function to change background image to match right answer
    var changeImage = function(){

    }

    //create init game function
    var startGame = function(){
        countQ = 0;
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
});
