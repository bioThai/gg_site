//bioThai
//Script for Encoder 2 activity

function encodeIt()
{
    //initialize variables
    var msg = document.getElementById("encoder_input").value;    
    var new_msg = "";
    var randNum = 0;
    var keyCharCode = 0;
    var KEY_MULTIPLIER = 2;
    var keyString = "";
    var newCode = 0;

     document.getElementById("message").innerHTML  = "&nbsp;";

    //if there is nothing inputted in text box, do not proceed with encoding message
    if (msg.length == 0)
        {
            resetDisplay();
            return;
        }

    //generate a key string of the same length as the message, to encode the original message with
    for (var i = 0; i < msg.length; i++)
        {
            //generate a random number from 33-45
            randNum = (Math.floor(Math.random()*13)) + 33;

            //set ASCII char code for each char in the key string equal to 2*random number
            keyCharCode = KEY_MULTIPLIER * randNum;

            //concatenate keyString character to end of current keyString
            keyString += String.fromCharCode(keyCharCode);

            //encode the original message string
            if ((msg.charCodeAt(i) + randNum) <= 126)
                {
                    newCode = msg.charCodeAt(i) + randNum;
                    new_msg += String.fromCharCode(newCode);
                }
            else if ((msg.charCodeAt(i) + randNum) > 126)
                {
                    newCode = Math.abs(msg.charCodeAt(i) - randNum);
                    new_msg += String.fromCharCode(newCode);
                }
        }

    //display the encoded message on the web page
    document.getElementById("secret").innerHTML = new_msg;

    if (document.getElementById("show").checked)
        {
            document.getElementById("message").innerHTML = msg;
            document.getElementById("key").innerHTML = keyString;
        }
    else if (document.getElementById("hide").checked)
        {
            document.getElementById("message").innerHTML = "Original message is hidden.";
            document.getElementById("key").innerHTML = "Key is hidden.";
        }
 }

function resetDisplay()
{
    document.getElementById("secret").innerHTML = "&nbsp;";
    document.getElementById("message").innerHTML = "&nbsp;";
    document.getElementById("key").innerHTML = "&nbsp;";
    document.getElementById("encoder_input").focus();
}