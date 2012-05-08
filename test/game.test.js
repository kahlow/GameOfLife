// Test file for game logic

// Tests:
// 1. Any live cell with fewer than two neighbors dies
// 2. Any live cell with two or three live neighbors lives on the the next generation
// 3. Any live cell with more than three live neighbors dies
// 4. Any dead cell with exactly three live neighbors becomes a live cell

$(document).ready(function(){
	module("Game Logic");
	
	test("Board Creation", function(){
        var gameBoard = new Game();
        var board = gameBoard.createBoard(25,25,25);
	    equal(25, board.length, "We expect board width to be 25");
        equal(25, board[0].length, "I expect boards height to be 25");
        
        var alive = 0;

        for (var i = 0; i < 25; i++){
            for (var j = 0; j < 25; j++){
                if (board[i][j].status == "Alive"){
                    alive++;
                }
            }
        }

        equal(25, alive, "I expect 25 cells to be alive");
    });

    test("Game Generation", function(){
        var gameBoard = new Game();
        var board = gameBoard.createBoard(5,5,25);
        var nextBoard = gameBoard.nextGeneration(board);
       
        notEqual(board, nextBoard, "I expect the two boards to be different");
    });

    test("Rule 1: Fewer than two neighbors equals death", function(){
        var game = new Game();
        var board = game.createBoard(3,3,0);
        board[1][1].alive();
        var newBoard = game.nextGeneration(board);

        equal(newBoard[1][1].status, "Dead", "I expect the cell to be dead");
    });
    
    test("Rule 2: Two neighbors equals continued life", function(){
        var game = new Game();
        var board = game.createBoard(3,3,0);
        board[1][1].alive();
        board[1][2].alive();
        board[0][2].alive();
        var newBoard = game.nextGeneration(board);
        
        equal(newBoard[1][1].status, "Alive", "I expect the cell to be alive");
    });
    
    test("Rule 3: More than three neighbors equals death", function(){
        var game = new Game();
        var board = game.createBoard(3,3,0);
        board[1][1].alive();
        board[1][2].alive();
        board[0][2].alive();
        board[2][1].alive();
        var newBoard = game.nextGeneration(board);

        equal(newBoard[1][1].status, "Dead", "I expect the cell to be dead");
    });
    
    test("Rule 4: Any dead cell with three neighbors becomes a live cell", function(){
        var game = new Game();
        var board = game.createBoard(3,3,0);
        board[1][1].dead();
        board[1][2].alive();
        board[2][2].alive();
        board[2][1].alive();
        var newBoard = game.nextGeneration(board);

        equal(newBoard[1][1].status, "Alive", "I expect the cell to become alive");
    });
});
