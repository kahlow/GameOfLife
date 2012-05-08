// Test file for game logic

// get game yo
//var game = require ('../src/app/game.js');

// Tests:
// 1. Any live cell with fewer than two neighbors dies
// 2. Any live cell with two or three live neighbors lives on the the next generation
// 3. Any live cell with more than three live neighbors dies
// 4. Any dead cell with exactly three live neighbors becomes a live cell

$(document).ready(function(){
	module("Game Logic");
	
	test("Board Creation", function(){
        var gameBoard = new Game();
        var board = gameBoard.createBoard(5,5,2);
	    equal(5, board.length, "We expect board width to be 5");
        for (var i = 0; i < 5; i++){i
            equal(5, board[i].length, "We expect boards height to be 5");
        }
        
        var alive = 0;

        for (var i = 0; i < 5; i++){
            for (var j = 0; j < 5; j++){
                if (board[i][j].status == "Alive")
                    alive++;
            }
        }

        equal(2, alive, "We expect two cells to be alive");
    });

    test("Game Generation", function(){
        var gameBoard = new Game();
        var board = gameBoard.createBoard(5,5,25);
        var nextBoard = gameBoard.nextGeneration(board);
       
        notEqual(board, nextBoard, "We expect the two boards to be different");
    });
});
