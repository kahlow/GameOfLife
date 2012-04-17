$(document).ready(function(){
	module("Cells");

	test("Cell Death", function(){
		ok(true, "This cell is dead.");
		Cell.Dead();		
		equal(Cell.Status, "Dead", "We expect death to be true");
	});

	test("Cell Life", function(){
		ok(true, "This cell is alive.");
		Cell.Alive();
		equal(Cell.Status, "Alive", "We expect alive to be true");
	});

	test("Cell location", function(){
		Cell.SetLocation(10,20);
		equal(10, Cell.X, "We expect X to be 10");
		equal(20, Cell.Y, "We expect Y to be 20");
	});
});
