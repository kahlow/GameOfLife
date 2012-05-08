$(document).ready(function(){
	module("Cells");

	test("Cell Death", function(){
		var cell = new Cell();
        cell.dead();
        equal(cell.status, "Dead", "We expect death to be true");
	});

	test("Cell Life", function(){
		var cell = new Cell();
        cell.alive();
		equal(cell.status, "Alive", "We expect alive to be true");
	});

	test("Cell location", function(){
        var cell = new Cell();
		cell.setLocation(10,20);
		equal(10, cell.x, "We expect X to be 10");
		equal(20, cell.y, "We expect Y to be 20");
	});
});
