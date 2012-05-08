var Game = Backbone.Model.extend({
	createBoard: function(height, width, numCells){
		// Create 2d array
		var board = new Array(width),	
            i = 0,
            j = 0,
            x = 0,
            y = 0;

		for (i = 0; i < width; i++){
		    board[i] = new Array(height); 
			for (j = 0; j < height; j++){
				var cell = new Cell();
				cell.setLocation(i, j);
				board[i][j] = cell;
			}
		}

		for (i = 0; i < numCells; i++){
            x = Math.floor(Math.random() * width);
            y = Math.floor(Math.random() * height);
            //console.log(x + " " + y);
    		if (board[x][y].status == "Dead")
                board[x][y].alive();
            else
                i--;
		}

		return board;
	},
    nextGeneration: function(board){
        var width = board.length;
        var height = board[0].length;
        var i = 0,
            j = 0;
        var alive = 0;
        var g = new Game();
        var newBoard = g.createBoard(width, height, 0);
        _.extend(newBoard, board);
        for (i = 0; i < width; i++){
            for (j = 0; j < height; j++){
                alive = 0;
                
                if (j < height-1){
                    if (newBoard[i][j+1].status == "Alive"){
                        alive++;
                    }
                }
                if (j < height-1 && i < width-1){
                    if (newBoard[i+1][j+1].status == "Alive"){
                        alive++;
                    }
                }
                
                if (i < width-1){
                    if (newBoard[i+1][j].status == "Alive"){
                        alive++;
                    }
                }

                if (j > 0){      
                    if (newBoard[i][j-1].status == "Alive"){
                        alive++;
                    }
                }
                
                if (i < width-1 && j > 0){
                    if (newBoard[i+1][j-1].status == "Alive"){
                        alive++;
                    }
                }

                if (i > 0 && j < height-1){
                    if (newBoard[i-1][j+1].status == "Alive"){
                        alive++;
                    }
                }

                if (i > 0){
                    if (newBoard[i-1][j].status == "Alive"){
                        alive++;
                    }
                }
                
                if (i > 0 && j > 0){
                    if (newBoard[i-1][j-1].status == "Alive"){
                        alive++;
                    }
                }

                if (alive <= 2)
                    newBoard[i][j].dead();
                else if (alive > 3)
                    newBoard[i][j].dead();
                else if (alive == 3)
                    newBoard[i][j].alive();
            }
        }

        return newBoard;
    },

});
