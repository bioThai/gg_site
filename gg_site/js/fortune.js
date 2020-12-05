//bioThai
//Script for Fortune 1 activity

function startFortune()
{
    //initiate variables
    var num = 0;
    var question = "";
    var fortune1 = "Absolutely.";
    var fortune2 = "No way.";
    var fortune3 = "Probably.";
    var fortune4 = "Doubtful.";
    var fortune5 = "Could be.";
    var fortune6 = "Only the cosmos know the answer to that.";
    var fortune7 = "You must find the answer within yourself.";
    var fortune8 = "Yes, of course!";
    var fortune9 = "How do you think it works?";
    var fortune10 = "Madame Vadoma wonders about that too."; 

    //generate a random number from 1-10
    num = (Math.floor(Math.random()*10)) + 1;

    //get user input
    question = document.getElementById("fortuneInput").value;

    //check if any input was typed into textbox
    if (question.length == 0)
        {
            document.getElementById("fortuneOutput").innerHTML = "Please ask something.";
        }

    //output displayed is determined by switch case
    else 
    {  
    switch(num)
    {
        case 1:
             document.getElementById("fortuneOutput").innerHTML = fortune1;
            break;
        case 2:  
             document.getElementById("fortuneOutput").innerHTML = fortune2;
             break;
        case 3:  
              document.getElementById("fortuneOutput").innerHTML = fortune3;
            break;
        case 4:  
            document.getElementById("fortuneOutput").innerHTML = fortune4;
            break;
        case 5:  
             document.getElementById("fortuneOutput").innerHTML = fortune5;
            break;
        case 6:  
             document.getElementById("fortuneOutput").innerHTML = fortune6;
            break;
        case 7:  
             document.getElementById("fortuneOutput").innerHTML = fortune7;
            break;
        case 8:  
             document.getElementById("fortuneOutput").innerHTML = fortune8;
              break;
         case 9:  
             document.getElementById("fortuneOutput").innerHTML = fortune9;
            break;
         case 10:  
             document.getElementById("fortuneOutput").innerHTML = fortune10;
            break;
    }
    }
}

function resetFortuneDisplay()
{
   document.getElementById("fortuneOutput").innerHTML = "&nbsp;"; 

    document.getElementById("fortuneInput").focus();
}