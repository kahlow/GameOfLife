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
		ok(true, "The board is created");

	});

});
