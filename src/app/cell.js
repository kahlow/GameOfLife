var Cell = Backbone.Model.extend({
    x: 0,
	y: 0,
	status: "Dead",
	neighbors: [],
	setLocation: function(x,y){
					this.x = x;
					this.y = y;  
			},
    alive: function(){
				this.status = "Alive";
			},
	dead: function(){
				this.status = "Dead";
		  	},
	setNeighbors: function(n){
				this.neighbors = n;
			},	
});