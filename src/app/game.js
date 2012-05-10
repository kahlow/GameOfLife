var Game = Backbone.Model.extend({
    width: 0,
    height: 0,
	createBoard: function(width, height, numCells){
        this.width = width;
        this.height = height;
		var board = new Array(this.width);

        // create 2d array
		for (var w = 0; w < this.width; w++){
		    board[w] = new Array(this.height); 
			for (var h = 0; h < this.height; h++){
				var cell = new Cell();
				cell.setLocation(w, h);
				board[w][h] = cell;
			}
		}

        // set neighbors
        var neighbors = [];
        for (var w = 0; w < this.width; w++){
            for (var h = 0; h < this.height; h++){
                neighbors = [];
                for (var i = -1; i <= 1; i++){
                    for (var j = -1; j <= 1; j++){
                        if (i != 0 || j != 0){// not your own neighbor
                            if ((w + i >= 0 && h + j >= 0) && (w + i < this.width && h + j < this.height)){
                                neighbors.push(board[w + i][h + j]);                        
                            }
                        }
                    }
                }
                board[w][h].setNeighbors(neighbors);
            }
        }

        // turn random cells on
        var x, y;
		for (var i = 0; i < numCells; i++){
            x = Math.floor(Math.random() * this.width);
            y = Math.floor(Math.random() * this.height);
            //console.log("random location: x->" + x + " y->" + y);
            // make sure they're not repeated
    		if (board[x][y].status == "Dead")
                board[x][y].alive();
            else
                i--;
		}

		return board;
	},
    nextGeneration: function(board){
        var g = new Game();
        this.width = _.size(board);
        this.height = _.size(board[0]);
        var newBoard = g.createBoard(this.width, this.height, 0);
        _.extend(newBoard, board);

        var alive = 0;
        for (var i = 0; i < this.width; i++){
            for (var j = 0; j < this.height; j++){
                alive = 0;
                for (var c = 0; c < board[i][j].neighbors.length; c++){
                //_.each(board[i][j].neighborArray, function(cell){
                    if (board[i][j].neighbors[c].status == "Alive"){
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