// Test file for game logic

// get game yo
var game = require ('../src/app/game.js');

// Tests:
// 1. Any live cell with fewer than two neighbors dies
// 2. Any live cell with two or three live neighbors lives on the the next generation
// 3. Any live cell with more than three live neighbors dies
// 4. Any dead cell with exactly three live neighbors becomes a live cell

describe('"Should match"s', {
    'Should match': function(){
        value_of("Hello").should_match(/ell/);
    },
    'should add two numbers': function() {
        value_of(1+2).should_be(3);
    }
});
