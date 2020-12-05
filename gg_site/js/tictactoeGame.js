//bioThai
//Script for the tic tac toe game

/**** change_background(id) ****
-When used with onkeyup events, keyCode represents an actual keyboard key, so lowercase and uppercase letters have same keyCode.
-Use either "which" or "keyCode", depending on browser support.
-Putting the userInput variable in the "if" conditions ensures that there are no bugs.
-eg) If user inputs an X into a box and then presses O or another key, the textbox will stay the color for X and not change even though an event was triggered.
*/
function change_background(tictac_box_id) 
{
    var userInput = document.getElementById(tictac_box_id).value;

    //if keycode is not the code for O or X, and the value currently in the input box is not already O or X
    if (
        (event.keyCode != 79 || event.which != 79) 
        && (event.keyCode != 88 || event.which != 88) 
        && (userInput != 'O' && userInput != 'o') 
        && (userInput != 'X' && userInput != 'x'))
        {
           document.getElementById(tictac_box_id).style.backgroundColor = "whitesmoke";
            document.getElementById("tictac_caption").innerHTML = "Please enter an X or O.";
            document.getElementById(tictac_box_id).value = "";
        }
    //else if keycode is code for letter O and the value currently in the input box is O
    else if ((userInput == 'O' || userInput == 'o') && (event.keyCode == 79 || event.which == 79)) 
        {
            document.getElementById("tictac_caption").innerHTML = "&nbsp;";
            document.getElementById(tictac_box_id).style.backgroundColor = "lawngreen";

            check_winner();
        }
    //else if keycode is code for letter X and the value currently in the input box is X
    else if ((userInput == 'X' || userInput == 'x') && (event.keyCode == 88 || event.which == 88))
        {
            document.getElementById("tictac_caption").innerHTML = "&nbsp;";
             document.getElementById(tictac_box_id).style.backgroundColor = "cyan";

            check_winner();
        }
}

function check_winner()
{
    var tictac_boxes = new Array();
    for (var i = 1; i < 10; i++)
        {
            //populate tictac_boxes array with values from input text boxes, converted to uppercase
            tictac_boxes[i-1] = document.getElementById("tictac"+i).value.toUpperCase();
        }
    if (
        ((tictac_boxes[0] == tictac_boxes[1] && tictac_boxes[1] == tictac_boxes[2])
        || (tictac_boxes[0] == tictac_boxes[3] && tictac_boxes[3] == tictac_boxes[6]))
        && (tictac_boxes[0] == "O" || tictac_boxes[0] == "X")
    )
        {
            document.getElementById("tictac_caption").innerHTML = tictac_boxes[0] + " wins!";
        }
    else if (
        ((tictac_boxes[1] == tictac_boxes[4] && tictac_boxes[4] == tictac_boxes[7])
        || (tictac_boxes[3] == tictac_boxes[4] && tictac_boxes[4] == tictac_boxes[5])
        || (tictac_boxes[0] == tictac_boxes[4] && tictac_boxes[4] == tictac_boxes[8])
        || (tictac_boxes[2] == tictac_boxes[4] && tictac_boxes[4] == tictac_boxes[6]))
        && (tictac_boxes[4] == "O" || tictac_boxes[4] == "X")
        )
        {
            document.getElementById("tictac_caption").innerHTML = tictac_boxes[4] + " wins!";
        }
    else if (
        ((tictac_boxes[2] == tictac_boxes[5] && tictac_boxes[5] == tictac_boxes[8])
        || (tictac_boxes[6] == tictac_boxes[7] && tictac_boxes[7] == tictac_boxes[8]))
        && (tictac_boxes[8] == "O" || tictac_boxes[8] == "X")
        )
        {
            document.getElementById("tictac_caption").innerHTML = tictac_boxes[8] + " wins!";
        }
    else 
        {
            var empty_box = false;
            //check if any input boxes are empty
           for (var j = 0; j < 9; j++)
           {    
               if (tictac_boxes[j].length == 0)
                    empty_box = true;   
           }
            //if no empty input boxes found, then declare game outcome
           if (empty_box == false) 
           {
               document.getElementById("tictac_caption").innerHTML = "It's a draw! No winner.";
           }
        }
}

function resetGame()
{
    document.getElementById("tictac_caption").innerHTML = "&nbsp;";
    document.getElementById("tictac1").focus();

    //change background color of each input element of a certain class back to whitsmoke
   for (var i = 0; i < 9; i++) 
   {
       document.getElementsByClassName("tictactoe_input")[i].style.backgroundColor = "whitesmoke";
   }
}