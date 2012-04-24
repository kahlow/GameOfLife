var Game = Backbone.Model.extend({
	CreateBoard: function(height, width, numCells){
					// Create 2d array
					var board = new Array(width);	

					for (var i = 0; i < width; i++){
						board[i] = new Array(height); 
						for (var j = 0; j < height; j++){
							var cell = new Cell();
							cell.SetLocation(i, j);
							board[i][j] = cell;
						}
					}

					for (var i = 0; i < numCells; i++){
						board[Math.floor(Math.random()*width)][Math.floor(Math.random()*height)].Alive();
					}

					return board;
				},

});