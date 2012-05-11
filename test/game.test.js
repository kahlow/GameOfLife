// Test file for game logic

// Tests:
// 1. Any live cell with fewer than two neighbors dies
// 2. Any live cell with two or three live neighbors lives on the the next generation
// 3. Any live cell with more than three live neighbors dies
// 4. Any dead cell with exactly three live neighbors becomes a live cell

$(document).ready(function(){
	module("Game Logic");
	
	test("Board Creation", function(){
        var game = new Game();
        game.createBoard(25,25,25);
	    equal(25, game.gameBoard.length, "We expect board width to be 25");
        equal(25, game.gameBoard[0].length, "I expect boards height to be 25");
                
        var alive = 0;

        for (var i = 0; i < 25; i++){
            for (var j = 0; j < 25; j++){
                if (game.gameBoard[i][j].status == "Alive"){
                    alive++;
                }
            }
        }

        equal(25, alive, "I expect 25 cells to be alive");
    });

    test("Game Generation", function(){
        var game = new Game();
        var newBoard = game.createBoard(5,5,25);
        var nextBoard = game.nextGeneration();
       
        notEqual(newBoard, nextBoard, "I expect the two boards to be different");
    });

    test("Rule 1: Fewer than two neighbors equals death", function(){
        var game = new Game();
        game.createBoard(3,3,0);
        game.gameBoard[1][1].alive();
        game.nextGeneration();

        equal(game.gameBoard[1][1].status, "Dead", "I expect the cell to be dead");
    });
    
    test("Rule 2: Two neighbors equals continued life", function(){
        var game = new Game();
        game.createBoard(3,3,0);
        game.gameBoard[1][0].alive();
        game.gameBoard[1][1].alive();
        game.gameBoard[1][2].alive();
        game.nextGeneration();
        
        equal(game.gameBoard[1][1].status, "Alive", "I expect the cell to be alive");
    });
    
    test("Rule 3: More than three neighbors equals death", function(){
        var game = new Game();
        var board = game.createBoard(3,3,9);
        game.nextGeneration();

        equal(game.gameBoard[1][1].status, "Dead", "I expect the cell to be dead");
    });
    
    test("Rule 4: Any dead cell with three neighbors becomes a live cell", function(){
        var game = new Game();
        game.createBoard(3,3,0);
        game.gameBoard[1][1].dead();
        game.gameBoard[1][2].alive();
        game.gameBoard[2][2].alive();
        game.gameBoard[2][1].alive();
        game.nextGeneration();

        equal(game.gameBoard[1][1].status, "Alive", "I expect the cell to become alive");
    });
});
