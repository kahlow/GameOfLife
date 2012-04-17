var Cell = {
	X: 0,
	Y: 0,
	SetLocation: function(x,y){
				  this.X = x;
				  this.Y = y;  
			  },
	Status: "Dead",
    Alive: function(){
				this.Status = "Alive";
			},
	Dead: function(){
				this.Status = "Dead";
		  }	
};



