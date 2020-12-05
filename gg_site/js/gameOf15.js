//bioThai
//Script for Game of 15

//declare closure function object to avoid excessive global variables in HTML document 
var closureFunctObj = function(){
    //declare variables to be used in multiple functs
    var cells;
    var swapped;
    
    //declare an object by assigning {} to it
    var obj = {};
    
    /******Private functions:******/
    //function to swap values of cells array
    function swap(firstCell, secondCell)
    {
        swapped = true;
        secondCell.innerHTML = firstCell.innerHTML;
        firstCell.innerHTML = "";
    }

    //function to check if last player move led to a win
    function checkWinner()
    {
        //local variables
        var win = true;

        for (var i = 0; i < 4; i++)
            {
                for (var j = 0; j < 4; j++)
                    {
                        //if  cell value is not the number it should be, 
                        //and the cell being checked is not the last cell (bc last cell is empty string, so should have no number value), 
                        //win is false
                        if ((cells[i][j].innerHTML != i*4 + j + 1) && !(i == 3 && j == 3))
                            {
                                win = false;
                            }
                    }
            }
        if (win)
            {
                document.getElementById("game15_caption").innerHTML = "You won!";
                document.getElementById("game15_caption").style.backgroundColor = "green";
            } 
        else
            { 
                document.getElementById("game15_caption").style.backgroundColor = "initial";
            }
    }
    
    /******Public functions******
    Make functions publicly accessible by making them properties/methods of the obj declared above, and then return the value of the obj 
    *****************************/
    
    //function to load array and call placeNumbers()
    obj.setup = function()
    {
        //create the 1st dimension of the cells array (the rows)
        cells = new Array(4);

        //for each row in cells array
        for (var i = 0; i < 4; i++)
            {
                //create the 2nd dimension of the cells array (the columns)
                cells[i] = new Array(4);

                //for each column in cells array
                for (var j = 0; j < 4; j++)
                    {
                        //assign each table data element (using element ID) to appropriate position in cells array
                        cells[i][j] = document.getElementById("cell" + i + j);
                    }
            }
        obj.placeNumbers();
    };
    
    //function to place random numbers in the table cells
    obj.placeNumbers = function()
    {
        //local variables
        var numbers = new Array();
        var randomLoc;
        var temp;

        document.getElementById("game15_caption").innerHTML = "&nbsp;";
        document.getElementById("game15_caption").style.backgroundColor = "initial";

        //populate numbers array with each number from 0-15
        for (var i = 0; i < 16; i++)
            {
                numbers[i] = i;
            }

        //randomly swap values in the numbers array
        for (var j = 0; j < 16; j++)
            {
                randomLoc = Math.floor(Math.random()*15) + 1;
                temp = numbers[j];
                numbers[j] = numbers[randomLoc];
                numbers[randomLoc] = temp;
            }

        //populate the cells array with values from the numbers array
        //i is reset to 0 and acts as a counter
        i = 0;
        for (var row = 0; row < 4; row++)
            {
                for (var col = 0; col < 4; col++)
                    {
                        if (numbers[i] != 0)
                            cells[row][col].innerHTML = numbers[i];
                        else
                            cells[row][col].innerHTML = "";

                        i++;
                    }
            }
    };
    
    //function that will check if a move is legal or illegal each time a cell is clicked 
    //if the move is legal, call the swap() function
    //if it is not legal, display an alert
    //Also checks to see if this move is a winner (call checkWinner())
    obj.doClick = function(row,col)
    {
        //local variables
        var top = row - 1;
        var bottom = row + 1;
        var left = col - 1;
        var right = col + 1;

        document.getElementById("game15_caption").innerHTML = "&nbsp;";

        swapped = false;
        if ((top != -1) && (cells[top][col].innerHTML == ""))
            swap(cells[row][col], cells[top][col]);

        else if ((right != 4) && (cells[row][right].innerHTML == ""))
            swap(cells[row][col], cells[row][right]);

        else if ((bottom != 4) && (cells[bottom][col].innerHTML == ""))
            swap(cells[row][col], cells[bottom][col]);

        else if ((left != -1) && (cells[row][left].innerHTML == ""))
            swap(cells[row][col], cells[row][left]);
        else
            document.getElementById("game15_caption").innerHTML = "Illegal move.";
        checkWinner(); 
    };
    
    //return the value of obj so that it can be assigned to closureFunct variable
    return obj;
};

//declare a new closureFunct object called boggleObj
var game15Obj = new closureFunctObj();
