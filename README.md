Conway's Game of Life
=====================

This is my implementation of Conway's Game of Life using Backbone.js, Underscore.js, Twitter Bootstrap, JQuery and QUnit.

About
-----

The Game of Life is a cellular automation devised by the British mathematician John Conway in 1970.

The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.

*Rules*

1.  Any live cell with fewer than two live neighbours dies, as if caused by under-population.
2.  Any live cell with two or three live neighbours lives on to the next generation.
3.  Any live cell with more than three live neighbours dies, as if by overcrowding.
4.  Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The initial pattern consitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed - births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.
