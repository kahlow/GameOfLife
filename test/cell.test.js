$(document).ready(function(){
	module("Cells");

	test("Cell Death", function(){
		var cell = new Cell();
        cell.Dead();
        equal(cell.Status, "Dead", "We expect death to be true");
	});

	test("Cell Life", function(){
		var cell = new Cell();
        cell.Alive();
		equal(cell.Status, "Alive", "We expect alive to be true");
	});

	test("Cell location", function(){
        var cell = new Cell();
		cell.SetLocation(10,20);
		equal(10, cell.X, "We expect X to be 10");
		equal(20, cell.Y, "We expect Y to be 20");
	});
});
