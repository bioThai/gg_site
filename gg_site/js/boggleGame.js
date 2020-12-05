//bioThai
//Script for playing Boggle game. This is a simplified version of Boggle with no timer or letter grid.

//declare closure function object to avoid excessive global variables in HTML document 
var closureFunctObj = function(){
    //declare variables to be used in multiple functs
    var roundCount;
    var roundScore;
    var totalScore;
    var wordsetsArray;
    var userWordsArray;
    var invalidWordsArray;

    //declare an object by assigning {} to it
    var obj = {};
    
    /******Public functions******
    Make functions publicly accessible by making them properties/methods of the obj declared above, and then return the value of the obj 
    *****************************/
    
    //reset "global" variables, randomly choose 5 word sets for the game, then call newRound()
    obj.setup = function()
    {
        //local variables
        var numsArray = new Array(8);
        var randIndex = 0;
        var temp = 0;

        //assign values to "global" variables
        roundCount = 0;
        roundScore = 0;
        totalScore = 0;

        //populate numsArray with each number from 1-8
        for (var i = 0; i < 8; i++)
            {
                numsArray[i] = i + 1;
            }

        //randomly swap values in the numsArray. The first 5 new values in the numsArray will determine which word sets are chosen for the game
        for (var j = 0; j < 8; j++)
            {
                randIndex = Math.floor(Math.random()*7) + 1;
                temp = numsArray[j];
                numsArray[j] = numsArray[randIndex];
                numsArray[randIndex] = temp;
            }

        //create the 1st dimension of the wordsets array (the rows)
        wordsetsArray = new Array(5);

        //for each row in wordsets array
        for (var k = 0; k < 5; k++)
            {
                //create the 2nd dimension of the wordsets array (the columns)
                wordsetsArray[k] = new Array();

                //populate row with randomly-chosen word array from words(x) function in linked js file
                wordsetsArray[k] = words(numsArray[k]);
            }

        obj.newRound();
    };

    obj.newRound = function()
    {
        //local variables
        var scrambledWord = "";

        //assign values to "global" variables
        userWordsArray = new Array();
        invalidWordsArray = new Array();
        roundScore = 0;
        roundCount++;

        if (roundCount >= 5)
        {
            //set "next round" button's disabled attribute to true
            document.getElementById("next_round_button").disabled = true; 
        }
        else
        {
            //set "next round" button's disabled attribute to false
            document.getElementById("next_round_button").disabled = false;
        }

        //display the current round number
        document.getElementById("round_count_th").innerHTML = "Round " + roundCount + " of 5";

        //the scrambledWord to display in each round is in wordsetsArray[roundCount-1][0]
        scrambledWord = wordsetsArray[roundCount-1][0];
        document.getElementById("letters").innerHTML = "<b>Letters: </b>" + scrambledWord;

        //clear input text box
        document.getElementById("boggle_user_input").value = "";

        //set focus on user input text box
        document.getElementById("boggle_user_input").focus();

        //clear the innerHTML of entries and results divs
        document.getElementById("entries").innerHTML = "&nbsp;";
        document.getElementById("results").innerHTML = "&nbsp;";
    };

    //check that userWord is valid. 
    //If valid, push userWord into userWordsArray
    //If invalid, then push userWord into invalidWordsArray
    obj.addUserWord = function()
    {
        //local variables
        var isAWord = false;
        var userWord = "";

        //store user's input from text box as lowercase to avoid issues with string comparison later
        userWord = document.getElementById("boggle_user_input").value.toLowerCase();

        //start i at 1 to skip wordsetsArray[roundCount-1][0] bc that's the scrambled word in the set, not an actual word
        for (var i = 1; i < wordsetsArray[roundCount-1].length; i++)
            {
                if (userWord == wordsetsArray[roundCount-1][i])
                    {
                        //push userWord into userWordsArray
                        userWordsArray.push(userWord);

                        roundScore++;
                        totalScore++;
                        isAWord = true;
                    }
                //if userWord was found in the wordset before end of loop was reached, then break out of loop to reduce search time
                if (isAWord == true)
                    break;
            }
        //if userWord was not found in the wordset at all 
        if (isAWord == false)
            invalidWordsArray.push(userWord);

        //clear input text box
        document.getElementById("boggle_user_input").value = "";

        //set focus on user input text box
        document.getElementById("boggle_user_input").focus();
    };

    obj.displayUserWords = function()
    {
        document.getElementById("entries").innerHTML = "<b>Valid: </b>" + userWordsArray.toString() + "<br><b>Invalid: </b>" + invalidWordsArray.toString();
    };

    obj.displayResults = function()
    {
        //local variables
        var gameStory = "";

        //if last round has been reached
        if (roundCount >= 5)
            {
                //assign a value to the final gameStory
                if (totalScore <= 15)
                    {
                        gameStory = "The festival was cancelled due to insufficient funds.<br><br>";
                    }
                else if (totalScore > 15 && totalScore <= 25)
                    {
                        gameStory = "Random issues plague the festival. Rumor has it that the festival is just a money laundering scheme.<br><br>";
                    }
                else if (totalScore > 25 && totalScore <= 35)
                    {
                        gameStory = "The festival is going well but lacks adequate support staff.<br><br>";
                    }
                else if (totalScore > 35 && totalScore <= 45)
                    {
                        gameStory = "The festival is a success! Greg managed to turn a profit.<br><br>";
                    }
                else if (totalScore > 45 && totalScore <= 55)
                    {
                        gameStory = "Some say the festival is even better than the Electric Daisy Carnival.<br><br>";
                    }
                else if (totalScore > 55)
                    {
                        gameStory = "The festival is wildly successful!<br><br>";
                    }
            }
        document.getElementById("results").innerHTML = gameStory + "<b>Round score: </b>$" + (roundScore*.5) + "M<br><b>Total score: </b>$" + (totalScore*.5) + "M";
    };
    
    //return the value of obj so that it can be assigned to closureFunct variable
    return obj;
};

//declare a new closureFunct object called boggleObj
var boggleObj = new closureFunctObj();