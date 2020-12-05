//bioThai
//Script for Fortune 2 activity

function startFortune()
{
    var num = 0;
    var fortune1 = "Your internal landscape has weathered many storms.";
    var fortune2 = "You will be rewarded for your efforts.";
    var fortune3 = "The bird you see is just a beak in a cardinal onesie.";
    var fortune4 = "Don't believe everything you perceive.";
    var fortune5 = "Don't eat that.";
    var fortune6 = "Stop it.";
    var fortune7 = "You already know the answer.";
    var fortune8 = "Elevate your existence.";
    var fortune9 = "The cosmos believe in you.";
    var fortune10 = "What does it mean to be happy?"; 

    //generate a random number from 1-10
    num = (Math.floor(Math.random()*10)) + 1;

    //output displayed is determined by random number generated
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