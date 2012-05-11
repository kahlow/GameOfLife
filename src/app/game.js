var Game = Backbone.Model.extend({
    width: 0,
    height: 0,
    gameBoard: [],
	createBoard: function(width, height, numCells){
        this.width = width;
        this.height = height;
		this.gameBoard = new Array(this.width);

        // create 2d array
		for (var w = 0; w < this.width; w++){
            this.gameBoard[w] = new Array(this.height); 
			for (var h = 0; h < this.height; h++){
				var cell = new Cell();
				cell.setLocation(w, h);
                cell.dead();
				this.gameBoard[w][h] = cell;
			}
		}

        // turn random cells on
        var x, y;
		for (var i = 0; i < numCells; i++){
            x = Math.floor(Math.random() * this.width);
            y = Math.floor(Math.random() * this.height);

            // make sure they're not repeated
            if (this.gameBoard[x][y].status == "Dead")
                this.gameBoard[x][y].alive();            
            else
                i--;            
		}

        this.setNeighbors();
		return this.gameBoard;
	},
    setNeighbors: function(){
        // set neighbors
        var neighbors = [];
        for (var w = 0; w < this.width; w++){
            for (var h = 0; h < this.height; h++){
                neighbors = [];
                for (var i = -1; i <= 1; i++){
                    for (var j = -1; j <= 1; j++){
                        if (i != 0 || j != 0){// not your own neighbor
                            if ((w + i >= 0 && h + j >= 0) && (w + i < this.width && h + j < this.height)){
                                neighbors.push(this.gameBoard[w + i][h + j]);                        
                            }
                        }
                    }
                }
                this.gameBoard[w][h].setNeighbors(neighbors);
            }
        }
    },
    nextGeneration: function(){
        var kill = [],
            birth = [];
        _.each(this.gameBoard, function(row){
            _.each(row, function(cell){
                var numAlive = _.size(_.filter(cell.neighbors, function(neighbor){
                    return neighbor.status == "Alive";
                }));

                if (numAlive < 2)
                    kill.push(cell);
                else if (numAlive > 3)
                    kill.push(cell);
                else if (numAlive == 3 || numAlive == 2)
                    birth.push(cell);
            });
        });

        _.each(this.gameBoard, function(row){
            _.each(row, function(cell){
                _.each(kill, function(toDie){
                    if (cell == toDie){
                        cell.dead();
                    }
                });
                _.each(birth, function(toLive){
                    if (cell == toLive){
                        cell.alive();
                    }
                });
            });
        });

        this.setNeighbors();
    },
});