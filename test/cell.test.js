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

	test("Cell Death", function(){
		ok(true, "This test is fine");
		var value = "hello";
		equal(value, "hello", "We expect value to be hello");
	});

	test("Cell Life", function(){
		ok(true, "all pass");
	});

	module("Module B");

	test("some other test", function(){
		expect(2);
		equal(true, false, "failing test");
		equal(true, true, "passing test");
	});
});
