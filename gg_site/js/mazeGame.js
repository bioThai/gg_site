//bioThai
//Script for the maze game

//declare closure function object to avoid excessive global variables in HTML document 
var closureFunctObj = function(){
    //declare variables to be used in multiple functs
    var cells;
    var MAZE_WIDTH = 6;
    var MAZE_HEIGHT = 6;
    var pitfall_row_val_array;
    var pitfall_col_val_array;
    var killer_pitfall_row_val = 0;            
    var killer_pitfall_col_val = 0;
    var NUM_OF_PITFALLS = 10;
    var won;
    var game_over;
    var flower_count = 0;

    //declare an object by assigning {} to it
    var obj = {};

    /******Private functions:******/

    //function to assign img src values to each image object in 2D array
    function assignImgSrc(m,n)
    {
        if (m == 0 && n == 0)
            {
                cells[m][n].getElementsByTagName("img")[0].src = "../../images/bee.png";
            }
        else if ((m == MAZE_HEIGHT - 1) && (n == MAZE_WIDTH - 1))
            {
                cells[m][n].getElementsByTagName("img")[0].src = "../../images/honey.png";
            }
        else 
            {
                cells[m][n].getElementsByTagName("img")[0].src = "../../images/sunflower.png";
            }
    }

    //function to set coordinates of random pitfalls in the table cells
    function setPitfalls()
    {
        //local variables
        var randNum1 = 0;
        var randNum2 = 0;
        var randNum3 = 0;

        //set row- and col-values of pitfalls 
        for (var j = 0; j < pitfall_col_val_array.length; j++)
            {
                randNum1 = (Math.floor(Math.random()*MAZE_HEIGHT));

                if (randNum1 == 0)
                    randNum2 = (Math.floor(Math.random()*4)) + (MAZE_WIDTH-4);
                else if (randNum1 == MAZE_HEIGHT - 1)
                    randNum2 = (Math.floor(Math.random()*4));
                else    
                    randNum2 = (Math.floor(Math.random()*MAZE_WIDTH));

                pitfall_row_val_array[j] = randNum1;
                pitfall_col_val_array[j] = randNum2;
            }

        //assign a randomly-chosen pitfall as killer (game ends if killer is clicked)
        randNum3 = (Math.floor(Math.random()*NUM_OF_PITFALLS)) + 0;
        killer_pitfall_row_val = pitfall_row_val_array[randNum3];
        killer_pitfall_col_val = pitfall_col_val_array[randNum3];
    }

    //function to decide what to do based on cell that user clicked
    //check if clicked cell is pitfall cell. If yes, then ask user to make another move.
    //If !pitfall, then check if clicked cell is beehive cell. 
    //Otherwise, swap cells. 
    function decideAction(row, col, adjacentVal, adjacentPos)
    {
        var clicked_cell_img = cells[row][col].getElementsByTagName("img")[0];

        if (isPitfall(row,col))
            {
                clicked_cell_img.src = "../../images/crow.png";

                //if pitfall is also a killer
                if ((row == killer_pitfall_row_val) && (col == killer_pitfall_col_val))
                    {
                        game_over = true;
                        document.getElementById("maze_table_caption").innerHTML = "You were eaten! Game over.";
                        document.getElementById("maze_table_caption").style.backgroundColor = "red";
                    }
                else 
                    {
                        document.getElementById("maze_table_caption").innerHTML = "Danger! Pick another spot.";
                    }
            }
        //else if cell img src matches src of beehive image
        else if (clicked_cell_img.src.match("honey.png"))
            {
                if (flower_count < 12)
                    {
                        document.getElementById("maze_table_caption").innerHTML = "You must visit at least 12 flowers before returning to the hive.";
                    }
                else
                    {
                        won = true;
                        document.getElementById("maze_table_caption").innerHTML = "You won!";
                        document.getElementById("maze_table_caption").style.backgroundColor = "green";
                    }
            } 
        else
            {
                if (adjacentPos == "top" || adjacentPos == "bottom")
                    swap(cells[row][col], cells[adjacentVal][col]);
                else if (adjacentPos == "left" || adjacentPos == "right")
                    swap(cells[row][col], cells[row][adjacentVal]);
                flower_count++;
                document.getElementById("maze_table_caption").innerHTML = "Flower count: " + flower_count;
            }
    }

   //function to check if cell is a pitfall cell
    function isPitfall(row, col)
    {
        //check if clicked row and col values are the same as a pitfall row/col values
        for (var i = 0; i < pitfall_row_val_array.length; i++)
            {
                if ((row == pitfall_row_val_array[i]) && (col == pitfall_col_val_array[i]))
                    return true;
            }
        return false;
    }

   //function to swap values of cells array
    function swap(firstCell, secondCell)
    {
        var temp = secondCell.getElementsByTagName("img")[0].src;

        secondCell.getElementsByTagName("img")[0].src = firstCell.getElementsByTagName("img")[0].src;
        //set firstCell img src to bee image src
        firstCell.getElementsByTagName("img")[0].src = temp; 
    }


    /******Public functions******
    Make functions publicly accessible by making them properties/methods of the obj declared above, and then return the value of the obj 
    *****************************/
    
    //function to create new 2D array of table cell elements, assign it to cells var, populate it with image objects,
    //create new parallel arrays of pitfall x- and y-coordinates, 
    //and call setPitfalls()
    obj.setup = function()
    {
        //set "won" and "game_over" to false, set flower_count to 0
        won = false;
        game_over = false;
        flower_count = 0;

        //create the 1st dimension of the cells array (the rows)
        cells = new Array(MAZE_HEIGHT);

        //for each row in cells array
        for (var i = 0; i < MAZE_HEIGHT; i++)
            {
                //create the 2nd dimension of the cells array (the columns)
                cells[i] = new Array(MAZE_WIDTH);

                //for each column in cells array
                for (var j = 0; j < MAZE_WIDTH; j++)
                    {
                        //assign each table data element (using element ID) to appropriate position in cells array
                        cells[i][j] = document.getElementById("cell" + i + j);

                        //create new image object and append it as a child element to corresponding table data element
                        cells[i][j].appendChild(new Image());

                        //assign img src values to each image object
                        assignImgSrc(i,j);
                    }
            }

        //create new arrays for pitfall row and column values
        pitfall_row_val_array = new Array(NUM_OF_PITFALLS);
        pitfall_col_val_array = new Array(NUM_OF_PITFALLS);

        setPitfalls();
    };

    //function that will check if a move is legal or illegal each time a cell is clicked 
    //if the move is legal, call the decideAction function to decide what action to take next
    //if move is not legal, display a message
    obj.doClick = function(row,col)
    {
        //local variables
        var top = row - 1;
        var bottom = row + 1;
        var left = col - 1;
        var right = col + 1;

        //if user has already won or lost the game, then clicking a cell will do nothing
        if (won == true || game_over == true)
            return;

        document.getElementById("maze_table_caption").innerHTML = "&nbsp;";

        //check if clicked cell is in a swappable location 
        //(ie adjacent to the cell with img src matching the source for the bee image)
        if ((top != -1) && (cells[top][col].getElementsByTagName("img")[0].src.match("bee.png")))
            {
                decideAction(row,col,top,"top");
            }
        else if ((right != MAZE_WIDTH) && (cells[row][right].getElementsByTagName("img")[0].src.match("bee.png")))
            {
                decideAction(row,col,right,"right");
            }
        else if ((bottom != MAZE_HEIGHT) && (cells[bottom][col].getElementsByTagName("img")[0].src.match("bee.png")))
            {
                decideAction(row,col,bottom,"bottom");
            }
        else if ((left != -1) && (cells[row][left].getElementsByTagName("img")[0].src.match("bee.png")))
            {
                decideAction(row,col,left,"left");
            }
        else
            {
                document.getElementById("maze_table_caption").innerHTML = "Illegal move.";
            }
    };

    //function to reset all cells back to original images, clear colors/text, call setPitfalls() to create new pitfall cells
    obj.resetGame = function()
    {
        won = false;
        game_over = false;
        flower_count = 0;
        for (var i = 0; i < MAZE_HEIGHT; i++)
            {
                for (var j = 0; j < MAZE_WIDTH; j++)
                    assignImgSrc(i,j);
            }
        document.getElementById("maze_table_caption").innerHTML = "&nbsp;";
        document.getElementById("maze_table_caption").style.backgroundColor = "initial";

        setPitfalls();
    };

    //return the value of obj so that it can be assigned to closureFunct variable
    return obj;
};

//declare a new closureFunct object called mazeObj
var mazeObj = new closureFunctObj();