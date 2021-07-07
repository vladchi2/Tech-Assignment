const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Input the X size: ', boardSizeX => {
    readline.question('Input the Y size: ', boardSizeY => {

        var board = "";

        for (var i = 1; i <= boardSizeY; i++) {
            for (var j = 1; j <= boardSizeX; j++) {
                board += (i + j) % 2 ? "◻" : "◼";
            }
            board += "\n";
        }

        console.log(board);

        readline.close();
    });
});



