//bioThai
//Script for Encoder 1 activity

function encodeIt()
{
    //initialize variables
    var msg = document.getElementById("encoder_input").value;
    var new_msg = "";
    var newCode = 0;
    var upCaseCode = 155;
    var lowCaseCode = 219;
    var specialCode = 3;

    document.getElementById("message").innerHTML  = "&nbsp;";

    //if there is nothing inputted in text box, do not proceed with encoding message
    if (msg.length == 0)
        {
            resetDisplay();
            return;
        }

    //encode each letter in the message string
    for (var j = 0; j < msg.length; j++)
    {
        //check for upppercase letters and encode them
        if ((msg.charCodeAt(j) >= 65) && (msg.charCodeAt(j) <= 90))
        {
            newCode = upCaseCode - msg.charCodeAt(j);
        }
        //check for lowercase letters and encode them
        else if ((msg.charCodeAt(j) >= 97) && (msg.charCodeAt(j) <= 122))
        {
            newCode = lowCaseCode - msg.charCodeAt(j);   
        }
        //check for numbers and special characters and encode them
        else if ( ((msg.charCodeAt(j) > 90) && (msg.charCodeAt(j) < 97)) || (msg.charCodeAt(j) < 65))
            {
                newCode = msg.charCodeAt(j) + specialCode;
            }     

         //add each encoded character to the new message
         new_msg = new_msg + String.fromCharCode(newCode);
     }

    //display the encoded message on the web page
    document.getElementById("secret").innerHTML = new_msg;

    if (document.getElementById("show").checked)
        {                    document.getElementById("message").innerHTML = msg;
        }
    else if (document.getElementById("hide").checked)
        {                    document.getElementById("message").innerHTML = "Original message is hidden.";
        }
 }

function resetDisplay()
{
    document.getElementById("secret").innerHTML = "&nbsp;";
    document.getElementById("message").innerHTML = "&nbsp;";
    document.getElementById("encoder_input").focus();
}