//First we declare our size variables and 
//the board variable that will be displayed in the end.
var boardSizeX = 8;
var boardSizeY = 6;
var board = "";

//Then we make two 'for' statements because we need to display a matrix of elements
for (var i = 0; i < boardSizeY; i++) {
    for (var j = 0; j < boardSizeX; j++) {
        //We verify if the element should be a black or white tile(x,y even/odd -> white; x even/odd, y odd/even -> black)
        board += (i + j) % 2 ? "◻" : "◼";
    }
    //When one row is complete we go to the next line
    board += "\n";
}
//Logging the board
console.log(board);