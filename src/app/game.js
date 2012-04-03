var User = Spine.Class.sub({
	  init: function(name){
				    this.name = name;
					  }
});

var user = new User('Flynn');
alert(user.name + ' lives!');

