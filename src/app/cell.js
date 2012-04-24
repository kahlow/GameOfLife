var Cell = Backbone.Model.extend({
	X: 0,
	Y: 0,
	Status: "Dead",
	SetLocation: function(x,y){
				  this.X = x;
				  this.Y = y;  
			  },
    Alive: function(){
				this.Status = "Alive";
			},
	Dead: function(){
				this.Status = "Dead";
		  }	
});



